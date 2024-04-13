import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Products from './Components/Products.js';
import Feedback from './Components/Feedback.js';
import React from 'react';
import { useState } from 'react';
import BestSelling from './Components/BestSelling.js';
import LeaderboardPage from './Components/Leaderboard.js';
import SaveEarthComponent from './Components/SaveEarth.js';
import RegistrationForm from './Components/RegistrationForm.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';


function App() {
  const [Mode, setMode] = useState('light');
  const [AlertData, setAlertData] = useState(null);

  const showAlert=(message,type)=>{
     setAlertData({
      msg:message,
        type:type
     })
  }
  setTimeout(()=>{
    setAlertData(null);},3000
     )
  const toggleMode=()=>{
    if(Mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor='rgb(17,30,30)';
    // document.body.style.color='white';
     showAlert("Dark mode has been enabled","warning");
    // document.title="TextUtils-Light Mode";
    //  setInterval(()=>{
    //   document.title="TextUtils is amazing";
    //  },2000)
    }
    else{
     setMode('light');
     document.body.style.backgroundColor='white';
     document.body.style.color='black';
     showAlert("Light mode has been enabled","success");
     //document.title="TextUtils-Dark Mode";
    }
 }
  return (
    <>
    <Navbar title= "  ECO Fashion"  Mode='dark' toggleMode={toggleMode}/>
    <Home/>
    <BestSelling/>
     <Products/>
     <Feedback/>
     <LeaderboardPage/>
     {/*<SaveEarthComponent/>*/}
     <RegistrationForm/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
