
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //wheter dard mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title='TextUtils - Dark Mode'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
      document.title='TextUtils - Light Mode'
    }
  }

  

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>   {/*passing props in the navbar component basically passings as variables and using in navbar*/}
        <Alert alert={alert}/>
        <div className="container my-3">
          
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route> 
          
            <Route exact path="/React-TextUtils">
              <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>
            </Route>
          </Switch>

          {/* <About/> */}
        </div>
        </Router>
    </>
  );
}

export default App;
