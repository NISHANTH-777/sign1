import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div>
        <ul className='container flex flex-col '>
        <li><Link className='border border-b bg-slate-500' to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
    
    
  )
}

export default Navbar