import React from 'react'
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

const Home = () => {
    return (
        <>
          <HeroSection {...homeObjOne} />
          <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjTwo} />
          <Pricing />
          <HeroSection {...homeObjFour} />
        </>
      );
}

export default Home
