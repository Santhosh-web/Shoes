import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
  
        <div className="left">

          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{desc}</p>
   
          <Link href="/products">
            <button type="button">{buttonText}</button>
          </Link>
        </div>
   
<div className='footer-banner-image'>
        <img 
          src={
            urlFor(image)
          } 
        />
        </div>
      </div>

  )
}

export default FooterBanner