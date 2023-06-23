'use client'

import React from 'react';
import Header from '@/components/HomePage/Header';
import AboutUs from '@/components/HomePage/AboutUs';
import HeroSeedling from '@/components/HomePage/HeroSeedling';
import OurTools from '@/components/HomePage/OurTools';
import JoinToUs from '@/components/HomePage/JoinToUs';
import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  if (!session?.user?.name) {
    return (
      <>
        <Header />
        <AboutUs />
        <HeroSeedling />
        <OurTools />
        <JoinToUs />
      </>
    );
  } else {
    // const latitude = 50.527293099999994; // Szerokość geograficzna
    // const longitude = 22.6921608; // Długość geograficzna

    // const iframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2326203809153!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sus!4v1687448119935!5m2!1sen!2sus`;

    // return (
    //   <>
    

    //     <div className="map-container">
    //       <iframe
    //         src={iframeSrc}
    //         width="600"
    //         height="450"
    //         style={{ border: '0' }}
    //         allowFullScreen
    //         loading="lazy"
    //         referrerPolicy="no-referrer-when-downgrade"
    //       ></iframe>
    //     </div>
    //   </>
    // );
  }
};

export default Home;