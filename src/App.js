import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import Textform from './components/Textform';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode,setMode]= useState('light');
  const toggleMode= () => {
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor ='white';
      setAlert({
        msg:"Light mode enabled",
        type:"success"
      })
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor ='#00304C';
      setAlert({
        msg:"Dark mode enabled",
        type:"success"
      })
     
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
   
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      },1500);
    }
   
  
 
  return (
    <Route>
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert}/>
     <div className="container">
      {/* <Textform value="" mode={mode} showAlert={showAlert} /> */}
      
       <About/>
     </div>
    </>
    </Route>
    
     
  );
}

export default App;
