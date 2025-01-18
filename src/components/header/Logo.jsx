import React from 'react'
import logo from "../../assets/amazon_logo_new.png";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
    <div className="flex items-center -ml-6 mt-2 mr-2">
      <img
        src={logo}
        alt="Amazon Logo"
        className="h-10 -mt-2 border border-transparent hover:border-white "
      />
    </div>
    </Link>
  )
}

export default Logo
