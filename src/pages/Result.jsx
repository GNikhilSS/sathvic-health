import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBodyType } from "../utils/getBodyType";
import { resultData } from '../data/resultData';
import { UserContext } from '../context/UserContext';

const Result = () => {
  // used to read data that is sent from other page
  const location = useLocation()
  const navigate = useNavigate();
  const { saveBodyType } = useContext(UserContext);

  // get scores from quiz page
  const { vataScore, pittaScore, kaphaScore } = location.state;

  const bodyType = getBodyType(vataScore, pittaScore, kaphaScore);
  const data = resultData[bodyType];

  useEffect(() => {
    if (bodyType) {
      saveBodyType(bodyType);
    }
  }, [bodyType]);

  if (!data) {
    return <div className="text-center mt-20">Calculating result...</div>
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-50 py-10'>
      <h1 className='text-4xl font-bold mb-8 text-gray-800'>Your Body Type Analysis</h1>

      <div className='flex flex-wrap justify-center gap-4 mb-6'>
        {data.traits && data.traits.map((trait, index) => (
          <p key={index} className='px-6 py-3 border-2 border-blue-200 bg-white rounded-full text-blue-800 font-medium shadow-sm'>
            {trait}
          </p>
        ))}
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-xl opacity-50 animate-pulse"></div>
        <img
          src={data.image}
          alt={data.title}
          className='relative h-64 w-64 object-cover rounded-full border-4 border-white shadow-lg mb-6'
          onError={(e) => { e.target.src = 'https://via.placeholder.com/250?text=Body+Type'; }} // Fallback
        />
      </div>

      <div className='text-center max-w-lg px-4'>
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">{data.title}</h2>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100">
          <p className='text-lg font-medium text-orange-800'>Goal: {data.goal}</p>
        </div>
      </div>

      <button
        onClick={() => navigate('/my-plan')}
        className='mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-1'
      >
        View My Personalized Plan
      </button>

      <p className='mt-4 text-gray-500 text-sm max-w-md text-center'>
        Get your detailed {data.title} diet, workout plans, and daily routine.
      </p>
    </div>
  )
}

export default Result
