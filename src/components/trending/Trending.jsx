import React from 'react'
import "./Trending.css"
import { FaRegStar } from "react-icons/fa6";
import { useContext } from 'react';
import { Datacontext } from "../context/Contextdata";
function Trending() {

  const data=useContext(Datacontext)


  return (
    <div className='Trending'>
      <div className='trendingcontainer'>
        <div className='trendimg'>
            <h1>Trending Products</h1>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
        </div>
        <div className='trendright'>


          {data.data[0].product?.slice(0, 4).map((singleproduct, index) => (
            <div className='trend'>
                <img src={singleproduct.image} alt="" srcset="" />
                <p>{singleproduct.category}</p>
                <p>{singleproduct.name}</p>
                <p><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />  </p>
                <p>{singleproduct.price}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Trending
