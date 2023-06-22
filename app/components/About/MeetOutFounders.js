"use client";

import image1 from "../../assets/images/our-founder/Manish.webp";
import image2 from "../../assets/images/our-founder/Yash.webp";
import image3 from "../../assets/images/our-founder/Lokesh.webp";

import linkedinIcon from "../../assets/images/our-founder/LinkedIn.webp";
import Image from "next/image";

import Tilt from "react-parallax-tilt";
import Link from "next/link";

const MeetOutFounders = () => {
  const founders = [
    {
      name: "Manish Shara",
      description: "Co- Founder & CEO",
      linkedin: "https://www.linkedin.com/in/manishshara/",
      image: image1,
    },
    {
      name: "Yash Desai",
      description: "Co- Founder",
      linkedin: "https://www.linkedin.com/in/yash-desai-20a3b5b1/",
      image: image2,
    },
    {
      name: "Lokesh Agarwal",
      description: "CTO",
      linkedin: "https://www.linkedin.com/in/lokesh198/",
      image: image3,
    },
  ];

  return (
    <div className="mb-28">
      <div className="mb-10 text-center">
        <h1 className="font-bold text-[#2f3440] text-4xl">Meet our Founders</h1>

        <p className="text-[#596379] text-2xl">Few words from founders desk</p>
      </div>

      <div className="grid max-w-5xl grid-cols-1 gap-5 mx-auto md:grid-cols-3 containter">
        {founders.map((founder, index) => (
          <FounderCard key={index} founder={founder} />
        ))}
      </div>
    </div>
  );
};

const FounderCard = ({ founder }) => {
  const { name, description, linkedin, image } = founder;

  return (
    <Tilt scale={1.1}>
      <div className="p-5 rounded-lg">
        <Image src={image} alt={`Picture of ${name}`} />

        <div className="flex items-center justify-between py-3">
          <div>
            <h1 className="text-[#2f3440] text-lg">{name}</h1>

            <p className="text-[#8691a8]">{description}</p>
          </div>

          <div>
            <Link href={linkedin}>
              <Image src={linkedinIcon} alt="Linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default MeetOutFounders;
