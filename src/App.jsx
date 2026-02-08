import React from 'react'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import MyPlan from './pages/MyPlan'

const App = () => {
  return (
    <Routes>
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/result' element={<Result />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/' element={<Home />} />
      <Route path='/my-plan' element={<MyPlan />} />
    </Routes>
  )
}

export default App
