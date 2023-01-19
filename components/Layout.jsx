import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {

const [theme,setTheme] = useState('light')
const toggleTheme = () => {
  if(theme === 'light'){
    setTheme('dark')
  }
  else{
    setTheme('light')
  }
}

useEffect(()=>{
  document.body.className = theme
},[theme])

  return (
    <div className="layout">
      <Head>
        <title>Nike Store</title>
      </Head>
      <header>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
      </header>
      <main className={`main-container ${theme}`}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout