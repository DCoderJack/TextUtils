import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })

     setTimeout(() => {
        setAlert(null);
     }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light' || mode !== 'dark'){
      setMode('dark');
      setText('light');
      showAlert("Dark Mode has been enabled!", "success");
      document.body.style.backgroundColor = '#042743';
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is the best website';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Download TextUtils Now!';
      // }, 1500);
    }
    else{
      setMode('light')
      setText('dark');
      showAlert("Light Mode has been enabled!", "success");
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextUtils - Light Mode';
    }
  }
    const orangeMode = () =>{
          if(mode === 'light' || mode === 'dark' || mode === 'blue' || mode === 'green')
          {
              setMode('orange')
              setText('light');
              showAlert("Orange Mode has been enabled!", "success");
              document.body.style.backgroundColor = 'orange';
          }
    }

    const blueMode = () =>{
      if(mode === 'light' || mode === 'dark' || mode === 'orange' || mode === 'green')
      {
        setMode('blue')
        setText('light');
        showAlert("Blue Mode has been enabled!", "success");
        document.body.style.backgroundColor = 'blue';
      }
    }

    const greenMode = () =>{
      if(mode === 'light' || mode === 'dark' || mode === 'orange' || mode === 'blue')
      {
        setMode('green')
        setText('light');
        showAlert("Green Mode has been enabled!", "success");
        document.body.style.backgroundColor = 'green';
      }
    }

  return (
    <>
    {/* <Router> */}
      <Navbar title = "TextUtils" aboutText = "About Text Utils" mode={mode} toggleMode={toggleMode} text={text} orangeMode={orangeMode} blueMode={blueMode} greenMode={greenMode}/>
      <Alerts alert={alert}/>
      <div className="conatiner my-3">
        {/* <Routes> */}
              {/* <Route exact path="/about"
                    element = {<About mode={mode}/>}>
              </Route> */}
              {/* <Route exact path="/" */}
                    {/* element = {<TextForm heading = "Try TextUtils - Word counter | Character counter | Remove Extraspaces" mode={mode} showAlert={showAlert}/>}> */}
                    <TextForm heading = "Type your text below" mode={mode} showAlert={showAlert}/>
              {/* </Route> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
