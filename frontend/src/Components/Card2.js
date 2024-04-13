import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Card2({title, description, imageUrl1,imageUrl2,InfoUrl,More}) { 
  return (
    <>
     <div className='my-3' >
     <div className="card my-3" style={{width: "33rem",height:"85vh",backgroundColor:"#024f4f"}}>
  <div className='row row-cols-2"' style={{margin:"5px",marginTop:"30px"}}>
  <div class="col" >
  <img src= {!(imageUrl1)?"https://source.unsplash.com/300x200/?disaster,earhquakes,thunderandlightning":imageUrl1 } className="card-img-top" style={{height:"55vh",width:"40vh"}} alt="..."/>
  </div>
  <div class="col" >
  <img src= {!(imageUrl2)?"https://source.unsplash.com/300x200/?disaster,earhquakes,thunderandlightning":imageUrl2 } className="card-img-top" style={{height:"55vh",width:"40vh"}} alt="..."/>
  </div>
  </div>
  <div className="card-body d-flex flex-column justify-content-center align-items-center">
    <h5 className="card-title text-center" style={{color:"white"}}>{title}</h5>
    <h5 className="card-text" style={{color:"white"}}> {description} <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /></h5> 
    <a href={InfoUrl} target ="_blank"  className = "btn btn-sm ">Shop Now</a>
  </div>
</div>
      </div>
    </>
  )
}
