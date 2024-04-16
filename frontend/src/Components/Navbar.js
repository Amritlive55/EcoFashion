import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export default function Navbar(props) {
  /*const colorChange=(color)=>{
    document.body.style.backgroundColor=color;
  }*/
  

  return (
    /*<nav className={`navbar navbar-expand-lg bg-success`}>*/
  <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: '#024f4f', boxShadow: 'none',backgrounColor:'transparent',color:"white" }}>
    <div className="container-fluid " >
    {/*<Link class="navbar-brand" to="#">
      <img src="logo.jpeg" alt="Bootstrap" width="30" height="24"/>
  </Link>*/}
      <Link className="navbar-brand"  to="#" style={{color:"white"}}><big><big>{props.title}</big></big></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" > 
            <Link className="nav-link"style={{color:"white"}} aria-current="page" to="/">Home</Link>
          </li>

         {/*} <li className="nav-item">
            <Link  className="nav-link " to="/Shop">Shop</Link>
  </li>*/}

          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#"style={{color:"white"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Shop">Electronics</a></li>
            <li><a class="dropdown-item" href="/Shop">Women's Fashion </a></li>
            <li><a class="dropdown-item" href="/Shop">Men's Fashion</a></li>
            <li><a class="dropdown-item" href="/Shop">Home & Kitchen</a></li>
            <li><a class="dropdown-item" href="/Shop">Sports & Fitness</a></li>
          </ul>
        </li>
          
          <li className="nav-item">
            <Link  className="nav-link active" style={{color:"white"}}to="/Leaderboard"> Leaderboard</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link"style={{color:"white"}} to="/Contact"> Contact </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link "style={{color:"white"}} to="/RegistrationForm"> Log-in/Sign-up</Link>
          </li>
        {/*}  <li className='nav-item' ><Link className='nav-link' to = "/Premium"><button style={{color: "black" , backgroundColor: "#eba605" , marginLeft: "1000px"}}>Try Premium</button></Link></li>*/}
       
          <li className="nav-item">
            <Link  className="nav-link" style={{color:"white"}}  to="/SaveEarth"><button type="button" class="btn btn-warning">Join Us</button> </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" style={{color:"white"}}  to="/Premium"><button type="button" class="btn btn-warning">Try Premium</button> </Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
  <input className="form-check-input " onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>

</div>
</div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: 'Set title here',
    aboutText:'About '
};

