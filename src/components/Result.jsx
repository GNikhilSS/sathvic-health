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
        <p className='m-3 p-4 border-2 rounded-[500px]'>Dry </p>
        <p className='m-3 p-4 border-2 rounded-[500px]'>cold </p>
        <p className='m-3 p-4 border-2 rounded-[500px]'>light </p>
        <p className='m-3 p-4 border-2 rounded-[500px]'>irregular </p>
      </div>
      <img src='/images/VataResultImage.png' className='h-87.5rounded-[900px] w-87.5' />
      <div className='text-center'>
        <p>Goal: Warmth, stability, nourishment</p>
      </div>
      <button className='border-2 p-2 m-3 rounded-2xl px-5 mt-4'>Know More</button>
      <p>about common diet, workout plans and things to avoid to stay healthy.</p>
    </div>
  )
}

export default Result
