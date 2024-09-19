import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
import { FaBucket } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

// import logo from "../assets/"

function Nav() {
  return (
    <div className='Header'>

        <div className='Left'>
           
                <NavLink to="/"> <img className="logo" src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="" /> </NavLink>
                <NavLink to="/shop">Everything</NavLink>
                <NavLink to="/groceries">Groceries</NavLink>
                <NavLink to="/juice">Juice</NavLink>
           
        </div>

        <div className='Right'>
                <NavLink to="/">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {/* <NavLink to="/">$0.00</NavLink> */}

                <NavLink to="/" style={{display:"flex", gap:"5px"}}>
                <p>$0.00</p>
                <FaBucket /></NavLink>



                <NavLink to="/login"><IoPersonSharp /></NavLink>

        </div>
           
    </div>
  )
}

export default Nav


{/* <div style={{width:"20%"}}>
            <a href='/'><img src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-regular.png" alt="logo" /></a>
        </div>

        <div className='middle'>
            <nav className='middle1'>
                <NavLink >SHOP ALL</NavLink>
                <NavLink>DECOR</NavLink>
                <NavLink>OFFICE</NavLink>
                <NavLink>LIVING ROOM</NavLink>
                <NavLink>BEDROOM</NavLink>
            </nav>
            <IoSearch />
        </div>

        <div className='last'>
            <nav className='last1'>
                <NavLink>STORY</NavLink>
                <NavLink>CONTACT</NavLink>
                <NavLink to="/order">TRACK ORDER</NavLink>
                <NavLink>Log In</NavLink>
            </nav>
            <FaBucket />
        </div>   */}