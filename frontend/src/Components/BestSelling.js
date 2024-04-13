import React from 'react'
import Card2 from './Card2.js'
export default function BestSelling() {
  return (
    <>
        <h1 className='text-center' style={{ paddingTop:"10px",fontSize: "75px", marginBottom: "30px", color: "#024f4f" }}>
    Best Selling
      </h1>
      <p className='text-center' style={{color:"white"}}>Get it on the trend with our curated selection of best-selling styles.</p>
      <div className='row row-cols-3" my-3'>
        <div class="col mx-3" >
        <Card2 title={"Regular Fit Men T-shirt"} description={"Rs500 | Rs100 off per kg of plastic|5.0"} imageUrl={""} InfoUrl={"https://www.ready.gov/earthquakes"} />
        </div>
        <div class="col mx-3">
        <Card2 title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/tsunamis"}/>
        </div>
    </div>

    <div className='row row-cols-3" my-3'>
        <div class="col mx-3" >
        <Card2 title={"Regular Fit Men T-shirt"} description={"Rs500 | Rs100 off per kg of plastic|5.0"} imageUrl={""} InfoUrl={"https://www.ready.gov/earthquakes"} />
        </div>
        <div class="col mx-3">
        <Card2 title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/tsunamis"}/>
        </div>
    </div>

    </>
  )
}
