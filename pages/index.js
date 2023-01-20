import React, { useEffect, useState } from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Link from "next/link";

const Home = ({ bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="explore">
        <h1>
          <span>For Your</span> Every Move
        </h1>
        <h3>
          A shoe is an item of footwear intended to protect and comfort the
          human foot.<strong>Shoes are also used as an
          item of decoration and fashion.</strong> The design of shoes has varied
          enormously through time and from culture to culture, with form
          originally being tied to function.<strong>Your shoes are the foundation of
          your outfit.</strong> They can make or break an entire look, and they can also
          affect your comfort throughout the day. That's why it's so important
          to take care of your shoes and keep them in good condition
        </h3>
        <Link href={`/products`}>
          <button>Shop the Feeling</button>
        </Link>
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[1]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { bannerData },
  };
};

export default Home;
