import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
// import HomeDescription from './components/HomeDescription'
import Home from './components/Home'
import Dataprovider from './components/context/Contextdata'
// import Bestseller from './components/bestseller/Bestseller'
import Everything from './components/everything/Everything'
import Groceries from './components/Groceries/Groceries'
import Juice from './components/juice/Juice'
import Product from "./components/product/Product"
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import About from './components/about/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Everything/>}/>
      <Route path='/groceries' element={<Groceries/>}/>
      <Route path='/juice' element={<Juice/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>

    
      {/* <Home/>
      <Bestseller/>
  */}
    </>
  )
}

export default App
