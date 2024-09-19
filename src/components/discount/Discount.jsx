import React from 'react'
import "./Discount.css"
import Shopnowbtn from '../shopnowbtn/Shopnowbtn'
function Discount() {
  return (
    <div className='discount'>
      <div className='discountupper'>
        <h1 style={{display:"flex", alignItems:"center"}}>Get 25% Off On Your First Purchase!</h1>
        <Shopnowbtn/>
      </div>
      <div className='nowportion'>
        <h1 style={{color:"black ", paddingTop:"5%",margin:"auto"}}>Try It For Free. No Registration Needed.</h1>
      </div>
    </div>
  )
}

export default Discount
