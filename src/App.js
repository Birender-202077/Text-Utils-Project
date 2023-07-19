
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Enable Dark Mode')
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
      setText('Enable Light Mode')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setText('Enable Dark Mode')
    }
  }
  return (
    <>
      <Navbar title="Birender's TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
      <Textarea heading="Enter text here to analyze" />
      {/* <About /> */}
    </>

  );
}
export default App;
