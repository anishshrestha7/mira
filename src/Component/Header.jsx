import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='con py-4'>
        <div className='flex justify-between'>
      <div>
          <img className='w-80% ' src="./src/assets/logo.webp" alt="" />
      </div>
        <ul className="flex gap-6 items-center text-sm font-light">
      <li><Link to="./">Home</Link></li>
      <li><Link to="./About">About us</Link></li>
      <li><Link to="#">Pages</Link></li>
      <li><Link to="#">Shop</Link></li>
      <li><Link to="#">Blog </Link></li>
      <li><Link to="#">Contact</Link></li>
    </ul>
     <ul className="flex gap-6 items-center text-sm font-light">
      <li><Link to="">Eng</Link></li>
      <li><Link to="">USD</Link></li>
    </ul>
        </div>
        
      </header>
    </>
  )
}

export default Header