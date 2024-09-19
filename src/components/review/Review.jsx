import React from 'react'
import "./Review.css"
import { FaRegStar } from "react-icons/fa6";
import Shopnowbtn from '../shopnowbtn/Shopnowbtn';
function Review() {
  return (
    <div className='Review'>
        <div className="reviewcontainer">
            <div className='reviewimg'>
                <h1>Customers Reviews</h1>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
            </div>
            <div className="review">
                <div className='review1'>
                    <div><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <div>photo</div>
                        <p>Mila Kunis</p>
                    </div>
                </div>
                <div className='review2'>
                    <h1>Deal Of The Day 15% Off On All Vegetables!</h1>
                    <p>I am text block. Click edit button to change this tex em ips.</p>
                    <Shopnowbtn/>
                </div>
                <div className='review1'>
                    <div><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <div>photo</div>
                        <p>Mila Kunis</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Review
