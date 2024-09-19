import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import "./Login.css"
function Login() {
  return (
    <div>
      <Nav/>
        <div className='logincontainer'>
            <div className='box'>
            <div className="login">
                <h1>Login</h1>
                

                <div className="log">
                    <input type="text" placeholder='Username or email address *'/>
                    <input type="text" placeholder='Password *' />
                    <div className='check'>
                        <input type="checkbox" name="" id="checker" />
                        <label htmlFor="checker">Remember me</label>
                    </div>
                    <button >LOG IN</button>
                    <a href='#'>Lost your password?</a>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Login
