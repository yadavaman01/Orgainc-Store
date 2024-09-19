import React from 'react'
import "./Freshfruit.css"
import Shopnowbtn from '../shopnowbtn/Shopnowbtn'
function Freshfruit() {
  return (
    <div className='freshfruit'>
        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"  alt="" srcset="" />
      <div className='freshfruitcontainer'>
        <div className="freshitems">

            <div className='freshitem'>
                <div>Farm Fresh Fruits</div>
                <div style={{marginBottom:"60px"}}>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</div>
                <Shopnowbtn />
            </div>
            <div className='freshitem'>
                <div>Farm Fresh Fruits</div>
                <div style={{marginBottom:"60px"}}>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</div>
                <Shopnowbtn/>
            </div>
            <div className='freshitem'>
                <div>Farm Fresh Fruits</div>
                <div style={{marginBottom:"60px"}}>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</div>
                <Shopnowbtn/>
            </div>
        </div>
        
            </div>
    </div>
  )
}

export default Freshfruit
