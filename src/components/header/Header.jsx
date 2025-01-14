import React from 'react'
import Logo from './Logo'
import Location from './Location'
import SearchBar from './SearchBar'
import Language from './Language'
import AccountAndList from './AccountAndList'
import ReturnAndOrders from './ReturnAndOrders'
import Cart from './Cart'

const Header = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-between px-4 py-2 md:px-8">
      <Logo/>
      <Location/>
      <SearchBar/>
      <div className="flex items-center space-x-4">
      <Language/>
      <AccountAndList/>
      <ReturnAndOrders/>
      <Cart/>
      </div>
    </div>
  )
}

export default Header
