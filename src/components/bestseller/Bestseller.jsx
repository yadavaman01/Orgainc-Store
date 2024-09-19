import React, { useContext } from 'react'
import "./Bestseller.css"
import { FaRegStar } from "react-icons/fa6";
import { Datacontext } from '../context/Contextdata';

function Bestseller() {

  const data=useContext(Datacontext)


  // console.log(data);
  
  // const products = data.data[0];
  console.log(data.data[0].product)


  return (

    <div className='bestseller'>
      {/* {console.log(products)} */}
      <div className='bestcontainer'>
        <div className='headerimg'>
            <h1>Best Selling Products</h1>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
        </div>
        <div className='bestright'>

          {data.data[0].product?.slice(0, 4).map((singleproduct, index) => (
            <div className='best' key={index}>
                <img src={singleproduct.image} alt="" srcset="" />
                <p>Groceries</p>
                <p>Assorted Coffee</p>
                <p><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />  </p>
                <p>£35.00</p>

            </div>
          ))
          }
        </div>

      </div>
    </div>
  )
}

export default Bestseller
