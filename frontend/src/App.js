import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import React from 'react';
import { useState } from 'react';
import LeaderboardPage from './Components/Leaderboard.js';
import SaveEarthComponent from './Components/SaveEarth.js';
import RegistrationForm from './Components/RegistrationForm.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import Main from './Components/Main.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Home Shop LeaderBoard Contact Login

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
  {/* <Navbar title= "  ECO Fashion"  Mode='dark' toggleMode={toggleMode}/>
      <Main/>
     <LeaderboardPage/>
     <Contact/>
  <Footer/>*/}
     {/*<Router>
  <Navbar title= "   ECO Fashion"   Mode='dark' toggleMode={toggleMode}/>
    <Routes>
    <Route exact path="/Main" element= {<Main/>}></Route>
    </Routes>
    <Routes>
    <Route exact path="/Leaderboard" element= {<LeaderboardPage/>}></Route>
    </Routes>
    <Routes>
    <Route exact path="/Leaderboard" element= {<LeaderboardPage/>}></Route>
    </Routes>
    <Routes>
    <Route exact path="/Contact" element= {<Contact/>}></Route>
    </Routes>
    <Routes>
    < exact path="/RegistrationForm" element= { <RegistrationForm/>}></>
    </Routes>*
     <Route exact path="/Leaderboard" element= {<LeaderboardPage/>}/>
    <Route exact path="/Contact" element= {<Contact/>}/>
    <Route exact path="/RegistrationForm" element= { <RegistrationForm/>}/>
    </Routes> 
    </Router>*/}


<Router>
<Navbar title= "   ECO Fashion"   Mode='dark' toggleMode={toggleMode}/>
    <Routes>
    <Route exact path="/" element= {<Main/>}/>
    <Route exact path="/Leaderboard" element= {<LeaderboardPage/>}/>
    <Route exact path="/Contact" element= {<Contact/>}/>
    <Route exact path="/RegistrationForm" element= {<RegistrationForm/>}/>
    </Routes>
  </Router>

    </>
  );
}

export default App;
