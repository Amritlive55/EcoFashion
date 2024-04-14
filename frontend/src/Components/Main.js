import React from 'react'
import Home from './Home.js';
import Products from './Products.js';
import Feedback from './Feedback.js';
import BestSelling from './BestSelling.js';

export default function Main() {
  return (
    <>
       <Home/>
       <BestSelling/>
       <Products/>
       <Feedback/>
    </>
  )
}
