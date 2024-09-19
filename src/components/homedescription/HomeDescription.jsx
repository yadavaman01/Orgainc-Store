import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import "./HomeDescription.css"
import Bestseller from "../bestseller/Bestseller";
import Freshfruit from '../freshfruit/Freshfruit';
import Discount from '../discount/Discount';
import Trending from '../trending/Trending';
import Review from '../review/Review';
import Featureditem from '../featuredbtn/Featureditem';
import Footer from '../footer/Footer';

function HomeDescription() {
  return (
    <div>

      <div className='completescreen'>
          {/* <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" /> */}

        <div className='portion1'>
          <div>
          <img className="bigimage" src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt="" />
          </div>
          <div className='sideofimage'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />

            <p>BestBest Quality Products</p>
            <h1>Join The Organic Movement!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div><FaCartShopping />Shop Now</div>
          </div>
        </div>
      </div>



      <div className="horizontalbar">
        <div>

        <div className='first'>
          <div>icon</div>
          <div>
            <p>Free Shipping</p>
            <p>Above $5 Only</p>
          </div>
        </div>
        <div className='first'>
          <div>icon</div>
          <div>
            <p>Certified Organic</p>
            <p>100% Guarantee</p>
          </div>
        </div>
        <div className='first'>
          <div>icon</div>
          <div>
            <p>Huge Savings</p>          
            <p>At Lowest Price</p>
          </div>
        </div>
        <div className='first'>
          <div>icon</div>
          <div>
            <p>Easy Returns</p>
            <p>No Questions Asked</p>
          </div>
        </div>
      </div>
        </div>


        <Bestseller/>
        <Freshfruit/>
        <Discount/>
        <Trending/>
        <Review/>
        <Featureditem/>
        {/* <Footer/> */}

    </div>
  )
}

export default HomeDescription
