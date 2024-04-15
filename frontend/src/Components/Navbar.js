import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export default function Navbar(props) {
  /*const colorChange=(color)=>{
    document.body.style.backgroundColor=color;
  }*/
  

  return (
    /*<nav className={`navbar navbar-expand-lg bg-success`}>*/
  <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: '#024f4f', boxShadow: 'none',backgrounColor:'transparent' }}>
    <div className="container-fluid d-flex justify-content-between" >
    {/*<Link* class="navbar-brand" to="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
  </Link*/}
      <Link className="navbar-brand"  to="#" style={{color:"white"}}><big><big>{props.title}</big></big></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link " to="/Shop">Shop</Link>
          </li>
          
          <li className="nav-item">
            <Link  className="nav-link active" to="/Leaderboard"> Leaderboard</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/Contact"> Contact </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link " to="/RegistrationForm"> Log-in/Sign-up</Link>
          </li>
        </ul>
        </div>
       
        <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-3" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
{/*<button type="button" class="btn btn-success mx-2" onClick={GreenMode}>Green Mode</button>
<button type="button" class="btn btn-info mx-2" onClick={BlueMode}>BlueMode</button>*/}
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

