import React, { useState } from 'react'
import { questions } from '../data/questions';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate()
  const [vataScore, setVataScore] = useState(0);
  const [pittaScore, setPittaScore] = useState(0);
  const [kaphaScore, setkaphaScoure] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const showNextQuestion = () => {
    if (selectedOption != null) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }
      else {
        // used to go to other page(route) programatically
        navigate('/result', { state: { vataScore, pittaScore, kaphaScore } })
      }
    }
    else {
      alert("Select an option")
    }
  }

  const vataButton = () => {
    if (selectedOption === "Vata") return;
    if (selectedOption === "Pitta") {
      setPittaScore(pittaScore => pittaScore - 1)
    }
    else if (selectedOption === "Kapha") {
      setkaphaScoure(kaphaScore => kaphaScore - 1)
    }

    setVataScore(vataScore => vataScore + 1)
    setSelectedOption("Vata");
  }

  const pittaButton = () => {
    if (selectedOption === "Pitta") return;
    if (selectedOption === "Vata") {
      setVataScore(vataScore => vataScore - 1)
    }
    else if (selectedOption === "Kapha") {
      setkaphaScoure(kaphaScore => kaphaScore - 1)
    }

    setPittaScore(pittaScore => pittaScore + 1)
    setSelectedOption("Pitta")
  }

  const kaphaButton = () => {
    if (selectedOption === "Kapha") return;
    if (selectedOption === "Pitta") {
      setPittaScore(pittaScore => pittaScore - 1)
    }
    else if (selectedOption === "Vata") {
      setVataScore(vataScore => vataScore - 1)
    }

    setkaphaScoure(kaphaScore => kaphaScore + 1)
    setSelectedOption("Kapha")
  }


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-250'>
        <h1 className='py-5'>{questions[currentQuestion].id}. {questions[currentQuestion].question}</h1>
        <div className='grid grid-cols-3 h-auto'>
          <button onClick={vataButton} className='m-1 p-1 border-2 border-sky-500 rounded-xl text-center flex flex-col items-center justify-center'>
            <img src={questions[currentQuestion].options[0].img} className='h-50' />
            {questions[currentQuestion].options[0].text}</button>
          <button onClick={pittaButton} className='m-1 p-1 border-2 border-sky-500 rounded-xl text-center flex flex-col items-center justify-center'>
            <img src={questions[currentQuestion].options[1].img} className='h-50' />
            {questions[currentQuestion].options[1].text}</button>
          <button onClick={kaphaButton} className='m-1 p-1 border-2 border-sky-500 rounded-xl text-center flex flex-col items-center justify-center'>
            <img src={questions[currentQuestion].options[2].img} className='h-50' />
            {questions[currentQuestion].options[2].text}</button>
        </div>
        <div className='flex items-end justify-end'>
          <button onClick={showNextQuestion} className='border-2 bg-green-300 p-2 m-3 text-center border-amber-100 rounded-2xl px-20'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Quiz
