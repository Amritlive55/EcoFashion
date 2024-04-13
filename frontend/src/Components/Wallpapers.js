import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export default function Wallpapers({imageUrl,title,desc}) {
  return (
    <div className="carousel-item">
    <img src= {!(imageUrl)?"https://source.unsplash.com/300x200/?disaster,earhquakes,thunderandlightning":imageUrl } className="d-block w-100" alt="..."  style={{height:'110vh',opacity:"0.5"}}/>
   {/* <img src="https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."  style={{height:'110vh',opacity:"0.8"}}/>*/}
    <div className="carousel-caption d-none d-md-block">
    {/*<h1 className='text-center' style={{paddingTop:'60px',color:"white",}}><strong><big>{title}</big></strong></h1>*/}
    <h1 className='text-center' style={{  paddingTop:"60px",fontSize: "70px" ,color: "white" }}>
       <i> {title}</i>
      </h1>
     <h3 style={{color:"white",paddingBottom:"30vh"}}>{desc}.</h3>
     <button type="button" class="btn btn-success" style={{backgroundColor:"#024f4f"}}>Explore Now</button>
     <a href="https://mediafiles.botpress.cloud/52b4fd13-06f3-48a3-a092-45abbcca3976/webchat/bot.html" target ="_blank"  style={{backgroundColor:"transparent", float: "right", fontSize: "50px",color:"white"}}>
         <FontAwesomeIcon icon={faComments}  />
          </a>
    </div> 
    </div>
  )
}
