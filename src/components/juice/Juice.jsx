import "./Juice.css"
import React, { useState } from 'react'
import Nav from '../nav/Nav'
import { useContext } from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Datacontext } from '../context/Contextdata';
import Footer from '../footer/Footer';
import { FaArrowRightLong } from "react-icons/fa6";
import Slide from "../Slide"
import { NavLink } from 'react-router-dom';
function Juice() {
  const data=useContext(Datacontext)
    const [priceval,setpriceval]=useState(10)

  return (
    <div>
        <Nav/>
    
        <div className='Everything'>
            <div className="everythingcontainer">
                <div className="everyleft">
                    <div className='search'>
                        <input type="text" placeholder='Search products...'/>
                        <div>&gt;</div>
                    </div>
                    <div><h1>Filter by price</h1></div>
                    <Slide value={priceval}></Slide>
                    <div className='priceval'>
                        <div><input type="text" placeholder='0'/></div>
                        <div><input type="text" placeholder='100'/></div>
                    </div>
                    <p>Groceries (9)</p>
                    <p>Juice (10)</p>
                    <div className='leftitem'>
                        

                        {data.data[0].product?.slice(0, 3).map((singleproduct, index) => (
                            
                                <div className='leftsomeproduct'>
                                    
                                    <NavLink to="/Product"><img src={singleproduct.image} alt=""/>
                                    
                                    {/* <p>{singleproduct.category}</p> */}
                                    <p className="name"style={{margin:"auto"}}>{singleproduct.name}</p>
                                    </NavLink>
                                    {/* <p><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />  </p> */}
                                    <p>{singleproduct.price}</p>
                                    
                                </div>
                            
                        ))}
                        
                        
                    </div>

                </div>
                <div className="everyright">
                    <p style={{marginBottom:"20px"}}>Home/Juice</p>
                    <h1 style={{marginBottom:"30px"}}>Juice</h1>
                    <div style={{display:"flex", justifyContent:"space-between", marginBottom:"50px"}}>
                        <p>Showing 1–9 of 12 results</p>
                        <div>
                            <p>Default sorting</p>
                            <div></div>
                        </div>
                    </div>

                    <div className='products'>
                        {data.data[0].product?.slice(0, 9).map((singleproduct, index) => (
                            <div className='totalproduct'>
                                <NavLink to="/product">
                                <img src={singleproduct.image} alt="" srcset="" />
                                </NavLink>
                                <p>{singleproduct.category}</p>
                                <NavLink to="/product"><p>{singleproduct.name}</p></NavLink>
                                <p><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />  </p>
                                <p>{singleproduct.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className='pages'>
                        <div>1</div>
                        <div>2</div>
                        <div><FaArrowRightLong /></div>
                    </div>

                </div>
            </div>
        
        </div>

        <Footer/>



    </div>
  )
}

export default Juice





