import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// APP name - Textutils
// We will implement functionality of manipulating text (capitalizing, word cound, remove space etc etc)
// 1.  we goona place bootstrap navbar here, replace all href = "#" with href = "/" and we append / in slef closing tags and change class to className
function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null) //initially state of Alert will be none

  const set_alert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }) // we call send this function as a prop in where ever we want alert
    setTimeout(() => {
      setAlert(null)
    }, 1400);
  }

  const toggleMode = () => {
    if (mode === 'light') 
    {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      set_alert('Switched to Dark Mode','success')
    }
    else 
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      set_alert('Switched to Light Mode','success')
    }
  }
  return (
    <>
      {/* <Router>
      <Navbar title="TextUtils" about="About-TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textbox set_alert={set_alert} heading="Enter your text to analyze below:" mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router> */}

      {/* <Router> */}
        <Navbar title="TextUtils" about="About-TextUtils" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        {/* <Routes> */}
          {/* <Route exact path="/" element = 
          {  */}
              <div className="container"> 
                <Textbox set_alert={set_alert} heading="Enter your text to analyze below:" mode={mode}/>
              </div>
          {/* }/> */}
          {/* <Route exact path="/about" element=
          {
            <About mode={mode}/>
          }/> */}
        {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;


// ============= PROPS =============
// 1. Building First Component
// Props give dynamicity to web page for example
// we want to use a navbar  component for different website names
// we pass name of navbar as a prop

// ============ END-PROPS ==========


// now we implementing dark mode by usage of useState
// we give state as dark mode or light mode to our components in App.js
