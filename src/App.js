import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled", "primary");
      //document.title = 'Textutils - Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode is Disabled", "primary");
     // document.title = 'Textutils - Light mode';
    }
  }

  return (
    <>
    <BrowserRouter>
        <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About  mode={mode} />}  />
          <Route exact path="/" element={<TextFrom showalert={showAlert} heading="Enter the Text" mode={mode} />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
