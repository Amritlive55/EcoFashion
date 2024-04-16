import React from 'react'
import Wallpapers from './Wallpapers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" style={{backgroundColor:"black"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  {/*<Wallpapers imageUrl={""} title={""} desc={""}/>*/}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/1352362769/photo/male-and-female-recycling-coworkers-holding-digital-tablet-and-plastic-box-full-of-mother.jpg?s=1024x1024&w=is&k=20&c=ydRpdvABGMplZMg0IJ9VROfbYcB7vXFzoWJbamy9JDI=" className="d-block w-100" alt="..." style={{height:'110vh',opacity:"0.5"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='text-center' style={{paddingTop:"60px",fontSize: "70px" ,color: "white"}}><i>The Greatest Barter System Is Here For You.</i></h1>
        <h3 style={{color:"white",paddingBottom:"30vh"}}>Buy Your Favourite Item From Our Shop In Exchange Of Waste. Be a Responsible CItizen While Purchasing Goods From Our Platform.</h3>
        <button type="button" class="btn btn-success" style={{backgroundColor:"#024f4f"}}>Explore Now</button>
       {/* <button type="button" style={{backgroundColor:"transparent", float: "right", fontSize: "50px"}}>           
        <FontAwesomeIcon icon={faComments}  />
  </button>*/}
         <a href="https://mediafiles.botpress.cloud/52b4fd13-06f3-48a3-a092-45abbcca3976/webchat/bot.html" target ="_blank"  style={{backgroundColor:"transparent", float: "right", fontSize: "50px",color:"white"}}>
         <FontAwesomeIcon icon={faComments}  />
          </a>
      </div>
    </div>
   <Wallpapers imageUrl={"https://media.istockphoto.com/id/1349313772/photo/modern-style-kitchen-interior-design-with-dark-blue-wall.jpg?s=1024x1024&w=is&k=20&c=I0Zf4OYcQfuzKwwTiiniLgj0wTdTEFeNx_jRJ2PS6ag="} title={"From Fashion To Home Essentials And Many More"} desc={"One Destination For All Your Shopping Needs.Find Every Item Of Your Choice At A Single Destination With A New Twist"}/>    
   <Wallpapers imageUrl={"https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={" Recycle, Reuse And Reduce With Us"} desc={"We Collect Nonbiodegradable Waste And Recycle It.This Waste Is Turned Into Useful Products And Helps Keep The Country Clean. We Use The Money Drom Your Purchase In Recycling And Managing The Waste"}/>
   <Wallpapers imageUrl={"https://media.istockphoto.com/id/1195827640/photo/electronic-waste-also-called-e-waste-old-used-electric-and-electronic-equipment-recycling-box.jpg?s=1024x1024&w=is&k=20&c=Uj0BGShVDUBI508ygtOOFSl_PrcJ2NdZMQEcLs8FJkQ="} title={"Help Us Manage Waste And Earn Your Reward"} desc={"Being A Highly populated Nation, Our Country Needs AWaste Mangement System That Is Supported By Every Citizen WholeHeartedly"}/>
   <Wallpapers imageUrl={"https://media.istockphoto.com/id/1411210350/photo/indian-woman-shopping-at-grocery-store.jpg?s=1024x1024&w=is&k=20&c=T9fi2qlL6rlr4X76lbx6_nRr1KmPidshRX26qujt2QM="} title={"Buy Anything And Everything At One Shop"} desc={"Buy Your Favourite Item From Our Shop In Exchange Of Your Waste.You Are Not Just Saving Money But Also Saving Our Planet "}/>
   <Wallpapers imageUrl={"https://images.unsplash.com/photo-1521404567986-a2c39cde0c31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"SALE IS LIVE NOW"} desc={""}/>


    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{backgroundColor:"transparent"}}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{backgroundColor:"transparent"}}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    </div>
  )
}