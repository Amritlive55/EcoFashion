import React from 'react'
import Card from './Card.js'
export default function Products() {
  return (
    <>
    <h1 className='text-center' style={{ paddingTop:"10px",fontSize: "80px", marginBottom: "30px", color: "#024f4f"}}>
    Our Products
      </h1>
      <div class="container d-flex justify-content-between">
    <div className='row row-cols-3"'>
        <div class="col" >
        <Card title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/earthquakes"} />
        </div>
        <div class="col">
        <Card title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/tsunamis"}/>
        </div>
        <div class="col">
        <Card title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/thunderstorms-lightning"}/>
        </div>
        <div class="col">
        <Card title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/thunderstorms-lightning"}/>
        </div>
          </div>
          </div>

          <div class="container d-flex justify-content-between">
    <div className='row row-cols-3"'>
        <div class="col" >
        <Card title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/earthquakes"} />
        </div>
        <div class="col">
        <Card title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/tsunamis"}/>
        </div>
        <div class="col">
        <Card title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/thunderstorms-lightning"}/>
        </div>
        <div class="col">
        <Card title={"Title"} description={""} imageUrl={""} InfoUrl={"https://www.ready.gov/thunderstorms-lightning"}/>
        </div>
          </div>
          </div>
          </>
  )
}
