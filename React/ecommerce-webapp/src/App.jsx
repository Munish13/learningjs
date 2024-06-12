import { useState } from 'react'
import './App.css';
import Navbar from "./Navbar";
import Home from './Home';
import Shimmer from './Shimmer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navOuter'>
        <Navbar />
      </div>
      <div className='homeOuter'>
        <Home />

      </div>
    </>
  )
};

export default App
