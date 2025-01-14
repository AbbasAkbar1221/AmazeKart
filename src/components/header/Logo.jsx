import React from 'react'
import logo from "../../assets/amazon_logo_new.png";

const Logo = () => {
  return (
    <div className="flex items-center -ml-6 mt-2 mr-2">
      <img
        src={logo}
        alt="Amazon Logo"
        className="h-10 -mt-2 "
      />
    </div>
  )
}

export default Logo
