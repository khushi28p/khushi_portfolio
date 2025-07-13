import React from 'react'
import Example from './components/Particle';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

const App = () => {

  return (
    <div className="w-screen h-screen"> 
    <Navbar />
      <HomePage />
    </div>
  )
}

export default App