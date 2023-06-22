"use client";

import React from "react";

import image1 from "../../assets/images/meet-the-investor/InvCompany1.webp";
import image2 from "../../assets/images/meet-the-investor/InvCompany2.webp";
import image3 from "../../assets/images/meet-the-investor/InvCompany3.webp";
import image4 from "../../assets/images/meet-the-investor/InvCompany4.webp";
import Image from "next/image";

import Tilt from "react-parallax-tilt";

const MeetTheInvestors = () => {
  return (
    <div className="container max-w-5xl mx-auto mb-28">
      <h1 className="text-4xl font-bold text-[#2f3440] mb-10">Got Featured</h1>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
        <Tilt tiltAxis="y" scale={1.1}>
          <Image src={image1} alt="image1" />
        </Tilt>
        <Tilt tiltAxis="y" scale={1.1}>
          <Image src={image2} alt="image2" />
        </Tilt>
        <Tilt tiltAxis="y" scale={1.1}>
          <Image src={image3} alt="image3" />
        </Tilt>
        <Tilt tiltAxis="y" scale={1.1}>
          <Image src={image4} alt="image4" />
        </Tilt>
      </div>
    </div>
  );
};

export default MeetTheInvestors;
