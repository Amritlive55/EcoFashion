import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import React from "react";
import { useState } from "react";
import LeaderboardPage from "./Components/Leaderboard.js";
import SaveEarthComponent from "./Components/SaveEarth.js";
import PremiumComponent from "./Components/Premium.js";
import RegistrationForm from "./Components/RegistrationForm.js";
import Shop from "./Components/Shop.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Main from "./Components/Main.js";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { app } from "./firebase";
//import SigninPage from "./Components/SignIn.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart.js";
import EcoImpactTracker from "./Components/EcoImpactTracker.js";
import SustainabilityBlogs from "./Components/SustainabilityBlogs.js";
import CarbonFootprintCalculator from "./Components/CarbonFootprintCalculator.js";
//import Dashboard from "./Components/Dashboard.js";

//const auth = getAuth(app);

function App() {
 /* const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "janhvigupta964@gmail.com",
      "Janhvi@12"
    ).then((value) => console.log(value));
  };*/

  const [Mode, setMode] = useState("light");
  const [AlertData, setAlertData] = useState(null);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Eco-Friendly T-Shirt",
      price: 20.0,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Recycled Tote Bag",
      price: 15.0,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,30,30)";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="ECO Fashion" Mode={Mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Leaderboard" element={<LeaderboardPage />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/SaveEarth" element={<SaveEarthComponent />} />
          <Route exact path="/Premium" element={<PremiumComponent />} />
          <Route exact path="/Shop" element={<Shop />} />
         {/* <Route exact path="/SigninPage" element={<SigninPage />} />*/}
         {/* <Route exact path="/Dashboard" element={<Dashboard />} />*/}
          <Route
            exact
            path="/CarbonFootprintCalculator"
            element={<CarbonFootprintCalculator />}
          />
          <Route
            exact
            path="/SustainabilityBlogs"
            element={<SustainabilityBlogs />}
          />
          <Route
            exact
            path="/EcoImpactTracker"
            element={<EcoImpactTracker />}
          />
          <Route
            exact
            path="/Cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
          <Route
            exact
            path="/RegistrationForm"
            element={<RegistrationForm />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;