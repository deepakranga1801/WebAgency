import React from 'react';
import Banner from '../components/Banner';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Subscribe } from '../components/Subscribe';
import Technologies from '../components/Technologies';
import Work from '../components/Work';
import { Blog } from '../components/Blog';

export default function Home() {
    return (
        <>
         <Banner /> 
         <Features />
         <Work />
         <Technologies />
         <Pricing />
         <Blog />
         <Subscribe />
        </>
    )
}
