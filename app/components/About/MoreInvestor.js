"use client";

import React from "react";

import member1 from "../../assets/images/our-team/Inv1.webp";
import member2 from "../../assets/images/our-team/Inv2.webp";
import member3 from "../../assets/images/our-team/Inv3.webp";
import member4 from "../../assets/images/our-team/Inv4.webp";
import member5 from "../../assets/images/our-team/Inv5.webp";
import member6 from "../../assets/images/our-team/Inv6.webp";
import member7 from "../../assets/images/our-team/Inv7.webp";
import member8 from "../../assets/images/our-team/Inv8.webp";
import Image from "next/image";

import Tilt from "react-parallax-tilt";

const MoreInvestor = () => {
  const ourInvestors = [
    {
      name: "Kunal Shah",
      description: "Founder, CRED",
      image: member1,
    },
    {
      name: "Gaurav Munjal",
      description: "Founder, UNACADEMY",
      image: member2,
    },
    {
      name: "Aakrit Vaish",
      description: "Co-Founder, HAPTIK",
      image: member3,
    },
    {
      name: "Harshil Mathur",
      description: "Founder, RAZORPAY",
      image: member4,
    },
    {
      name: "Vidit Aatrey",
      description: "Founder & CEO, MEESHO",
      image: member5,
    },
    {
      name: "Amrish Rau",
      description: "CEO, PINELABS",
      image: member6,
    },
    {
      name: "Lalit Keshre",
      description: "CEO, GROWW",
      image: member7,
    },
    {
      name: "Gokul Rajaram",
      description: "Product, DOORDASH",
      image: member8,
    },
  ];

  return (
    <div className="grid max-w-5xl grid-cols-1 gap-5 mx-auto md:grid-cols-3 containter mb-28">
      {ourInvestors.map((investor, index) => (
        <InvestorCard key={index} investor={investor} />
      ))}
    </div>
  );
};

const InvestorCard = ({ investor }) => {
  const { name, description, image } = investor;

  return (
    <Tilt scale={1.1}>
      <div className="p-5 rounded-lg">
        <Image src={image} alt={`Picture of ${name}`} />

        <div className="py-3">
          <h1 className="text-[#2f3440] text-lg">{name}</h1>

          <p className="text-[#8691a8]">{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default MoreInvestor;
