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
        <Card title={"Set of 6 T-shirts"} description={"Rs 1200 | 5.0"} imageUrl={"https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""} />
        </div> 
        <div class="col">
        <Card title={"Printed Coffee Mug"} description={"Rs 300 | 4.0"} imageUrl={"https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""}/>
        </div>
        <div class="col">
        <Card title={"Boat Headset"} description={"Rs 1299 | 5.0"} imageUrl={"https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""}/>
        </div>
        <div class="col">
        <Card title={"Watermelon Tote Bag"} description={"Rs 299 | 4.5"} imageUrl={"https://images.unsplash.com/photo-1495618744820-c50f82c21863?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""}/>
        </div>
          </div>
          </div>

          <div class="container d-flex justify-content-between">
    <div className='row row-cols-3"'>
        <div class="col" >
        <Card title={"Solid Color Hoodie"} description={"Rs 599 | 5.0"} imageUrl={"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""} />
        </div>
        <div class="col">
        <Card title={"Military Pattern T-shirt"} description={"Rs 399 | 4.9"} imageUrl={"https://images-cdn.ubuy.co.in/65f8460808a4753e900af712-men-s-us-united-states-army-camoflauge.jpg"} InfoUrl={""}/>
        </div>
        <div class="col">
        <Card title={"Crockery"} description={"Rs 899 | 3.9"} imageUrl={"https://plus.unsplash.com/premium_photo-1666974578465-84b6ba724189?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""}/>
        </div>
        <div class="col">
        <Card title={"Nike Shoes"} description={"Rs 1899 | 5.0"} imageUrl={"https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={""}/>
        </div>
          </div>
          </div>
          </>
  )
}
