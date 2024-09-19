import React from 'react'
import "./Footer.css"
import abc from "./../../assets/organic-store-white-logo.png"
function Footer() {
  return (
    <div className='Footer'>
      <div className='footercontainer'>
        
          <div className='footerleft'>
            <img src={abc} alt="" />
            <p>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
          </div>
          <div className='footerright'>
            <div></div>
            <div></div>
          </div>
      </div>


      
    </div>
  )
}

export default Footer
