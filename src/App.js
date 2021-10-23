import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
 import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert =  (message,type)=>{
       setalert({
          msg:message,
          type:type
       })

       setTimeout(() => {
        setalert(null);
      }, 1500);
  }
  const [mode,setMode] = useState('light');
  {/*const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }*/}
 const toggleMode = ()=>{
 // removeBodyClasses();
 //  document.body.classList.add('bg-'+cls);
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled","success");
  //    document.title = "Text-converter-DarkMode";
  }
    else {
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Light Mode has been enabled","success");
 // document.title = "Text-converter-LightMode";

  
}  
}
  return (
    <>
    <Router>
    <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode} />
         </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} mode={mode} heading="Enter the text here to analyze"/>
          </Route>
        </Switch>
        </div>
        </Router>
    
    
    
</>
  );
}

export default App;