import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/Frame 2133.png'
import avtar from '../../assets/Ellipse 52.png'

const Navbar = () => {

    const [dd1,setDd1]=useState('')
    const [dd2,setDd2]=useState('')
  return (
    <nav>
        <div><img src={logo} alt="logo" /></div>
        <div className='r-corner'>
            {console.log(dd1,dd2)}
            <select className='dd' value={dd1} onChange={(e)=>setDd1(e.target.value)}>
                <option value="learn">Learn</option>
                <option value="learn1">Learn1</option>
            </select>
            <select className='dd' value={dd2} onChange={(e)=>setDd2(e.target.value)}>
            <option value="practice">Practice</option>
            <option value="practice1">Practice1</option>
            </select>
            <img src={avtar} alt="avtar" />
        </div>
    </nav>
  )
}

export default Navbar