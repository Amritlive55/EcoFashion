import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ShopItem =(props)=>{

  let { title, price, description,image,rating}= props;
    return (
      <div className='my-3'>
        <div className="card my-3" style={{width: "18rem",height:"80vh"}}>
  {/*<img src="https://i.blogs.es/b2ccf8/mejores-ofertas-fin-de-semana-febrero-mediamarkt/840_560.jpeg" className="card-img-top" alt="..."/>*/}
  <img src= {!(image)?"https://i.blogs.es/b2ccf8/mejores-ofertas-fin-de-semana-febrero-mediamarkt/840_560.jpeg":image}  className="card-img-top"  alt="..." style={{height:"50vh"}}  />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <h5 className="card-title text-center">Rs {price*15} | {rating}
    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
    </h5>
    {/*<p className="card-text"> {description}... </p>*/}
    <a href="#"target ="_blank"  className = "btn btn-sm btn-success text-center" style={{backgroundColor:"#024f4f"}}>Shop Now</a>
  </div>
</div>
      </div>
    )
  }

export default ShopItem
