import React from 'react'
import Card2 from './Card2.js'
export default function BestSelling() {
  return (
    <>
        <h1 className='text-center' style={{ paddingTop:"20px",fontSize: "75px", paddingBottom: "4px", color: "#024f4f" }}>
    Best Selling
      </h1>
      <p className='text-center' style={{color:"white"}}>Get it on the trend with our curated selection of best-selling styles.</p>
      <div className='row row-cols-3" my-3'>
        <div class="col mx-3" >
        <Card2 title={"Regular Fit Men T-shirt"} description={"Rs 500 | Rs 100 off on 1Kg of plastic | 5.0"} imageUrl1={"https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imageUrl2={"https://images.unsplash.com/photo-1629227071576-e91767cc3024?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}InfoUrl={""} />
        </div>
        <div class="col mx-3">
        <Card2 title={"Set of 4 Crockery"} description={"Rs 650 | Rs 80 off on 1Kg of plastic | 4.9 "} imageUrl1={"https://plus.unsplash.com/premium_photo-1671574627912-31601cd217a7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imageUrl2={"https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}InfoUrl={""}/>
        </div>
    </div>

    <div className='row row-cols-3" my-3'>
        <div class="col mx-3" >
        <Card2 title={"Black Tote Bag"} description={"Rs 500 | Rs 70 off on 1Kg of plastic | 4.8"} imageUrl1={"https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imageUrl2={"https://images.unsplash.com/photo-1561503412-852800622772?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""} />
        </div>
        <div class="col mx-3">
        <Card2 title={"Headset"} description={"Rs 1999 | Rs 200 off on 1Kg of plastic | 5.0"} imageUrl1={"https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imageUrl2={"https://images.unsplash.com/photo-1608653206809-e6a8044173b0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""}/>
        </div>
    </div>
    </>
  )
}
