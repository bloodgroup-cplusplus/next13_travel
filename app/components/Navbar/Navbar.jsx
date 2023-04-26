import React,{useState} from "react"
import "./navbar.css"

import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import {SiYourtraveldottv} from "react-icons/si"
import Link from "next/link"


const Navbar = () =>{
    const[active,setActive] = useState("navbar")
    const showNav=()=>{
        setActive('navBar activeNavbar')
    }

    const removeNav = ()=>{
        setActive('navBar')
    }
    
    //code statement to add a background color to the header.
    const [transparent, setTransparent] = useState('header')
    const addBg = ()=>{
      if(window.scrollY >= 10){
        setTransparent('header activeHeader')
      }else{
        setTransparent('header')
      }
    }
    window.addEventListener('scroll', addBg)
  
    return (
      <section className='navBarSection'>
         <header className={transparent}>
          
            <div className="logoDiv">
              <Link href="/" className="logo flex"><h1><SiYourtraveldottv className='icon' />  Dot</h1></a>
            </div>
  
            <div className={active}>
              <ul onClick={removeNav} className="navLists flex">
                <Link className="navItem" href="/">
                    Home
                </Link>
                <Li className="navItem" href="/products">
                    Products
                </Li>
                <Link className="navItem" href="/resources">
                    Resources
                 </Link>
                <Link className="navItem" href="/contact">
                  Contact 
                </Link>
                <li className="navItem">
                  <a href="#" className="navLink">Blog</a>
                </li>
                
                <div className="headerBtns flex">
                <button className="btn loginBtn">
                  <a href="#">Login</a>
                </button>
                <button className="btn">
                  <a href="#">Sign Up</a>
                </button>
                </div>
              </ul>
              <div onClick={removeNav} className="closeNavbar">
                  <AiFillCloseCircle className='icon'/>
                </div>
            </div>
  
            <div onClick={showNav} className="toggleNavbar">
              <TbGridDots className='icon'/>
            </div>
         </header>
      </section>
    )
  
  export default Navbar

}