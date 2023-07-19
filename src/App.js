
import Alert from './Alert';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Enable Dark Mode')
  const toggleMode = (props) => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
      setText('Enable Light Mode')
      showAlert("Hy! Welcome to dark Page", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setText('Enable Dark Mode')
      showAlert("Hy! Welcome to Light Page", "success")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Navbar title="Birender's TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <Textarea heading="Enter text here to analyze" showAlert={showAlert} />
      {/* <About /> */}
    </>

  );
}
export default App;
