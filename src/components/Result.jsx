import React from 'react';
import { useLocation } from 'react-router-dom';
import { getBodyType } from "../utils/getBodyType";
import { resultData } from '../data/resultData';

const Result = () => {
  // used to read data that is sent from other page
  const location = useLocation()
  // get scores from quiz page
  const { vataScore, pittaScore, kaphaScore } = location.state;

  const bodyType = getBodyType(vataScore, pittaScore, kaphaScore);
  const data = resultData[bodyType];

  return (
    <div className='flex flex-col justify-center items-center h-screen mt-30'>
      <div className='flex'>
        <p className='m-3 p-4 border-2 rounded-[500px]'>Trait 1</p>
        <p className='m-3 p-4 border-2 rounded-[500px]'>Trait 1</p>
        <p className='m-3 p-4 border-2 rounded-[500px]'>Trait 1</p>
        <p className='m-3 p-4 border-2 rounded-[500px]'>Trait 1</p>
      </div>
      <img src='/images/VataResultImage.png' className='h-[350px] rounded-[900px] w-[250px]' />
      <div className='flex text-center'>
        <p className='m-3 h-[220px] border-2 rounded-2xl w-[220px]'>Diet Recommendations</p>
        <p className='m-3 h-[220px] border-2 rounded-2xl w-[220px]'>Things to avoid</p>
        <p className='m-3 h-[220px] border-2 rounded-2xl w-[220px]'>Workout plan</p>
      </div>
      <button className='border-2 p-2 m-3 rounded-2xl px-5 mt-4'>Know More</button>
    </div>
  )
}

export default Result
