import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import {MdOutlineDarkMode} from 'react-icons/md'
import { Cart } from './';
import Image from 'next/image';
import { useStateContext} from '../context/StateContext';
import logo from '../public/assets/logo.png';
const Navbar = ({toggleTheme,theme}) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><Image src={logo} /></Link>
      </p>

<div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
        <MdOutlineDarkMode className={`dark-icon ${theme}`} onClick={toggleTheme}  />
      </div>

      {showCart && <Cart theme={theme} />}
    </div>
  )
}

export default Navbar