import React from 'react'
import { useContext } from 'react'
import { Datacontext } from '../context/Contextdata'
import { FaRegStar } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import "./Product.css"
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
function Product() {
    const data=useContext(Datacontext)


  return (
    <div className='product'>

        <Nav/>
        <div className="productcontainer">
            <div className="productupper">
                <div className="proupperleft">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg" alt="" />
                </div>
                <div className="proupperright">
                    <h1>Assorted Coffee</h1>
                    <p><span style={{fontWeight:"bold"}}>£35.00 </span>+ Free Shipping</p>
                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                    <div className='addtocart'>
                        <div className='noofitem'> 1</div>
                        <div className='add'>Add To Cart</div>
                    </div>
                    <div style={{borderBottom:"1px solid #dddddc"}}></div>
                    <div>Categories: <span style={{color:"#abbc86"}}>Groceries, Juice</span></div>
                </div>
            </div>
            <div style={{borderBottom:"1px solid #dddddc ", width:"100%"}}></div>
            <div className='productlower'>
                <div className='description'>
                    <div>Description</div>
                    <div>Reviews (0)</div>
                </div>
                <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>

            </div>
            <div className="relatedproduct">
                <div><h1 style={{}}>Releated Products</h1></div>
                <div className='releateditem'>
                    {data.data[0].product?.slice(0, 3).map((singleproduct, index) => (
                        <div className='releatedlowerproduct'>
                            <NavLink to="/product">
                                <img src={singleproduct.image} alt="" srcset="" />
                            </NavLink>
                            <p>{singleproduct.category}</p>
                            <NavLink to="/product"><p style={{color:"black", fontWeight:"bold", textDecoration:"none"}}>{singleproduct.name}</p></NavLink>

                            <p><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />  </p>
                            <p style={{color:"black", fontWeight:"bold"}}>{singleproduct.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Product