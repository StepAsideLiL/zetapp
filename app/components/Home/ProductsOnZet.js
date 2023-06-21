"use client";

import image1 from "../../assets/images/products-on-zet/CC.webp";
import image2 from "../../assets/images/products-on-zet/Loan.webp";
import image3 from "../../assets/images/products-on-zet/BNPL.webp";
import image4 from "../../assets/images/products-on-zet/AccountSave.webp";
import Image from "next/image";

import Tilt from "react-parallax-tilt";

const ProductsOnZet = () => {
  const zetProducts = [
    {
      title: "CREDIT CARDS",
      description:
        "100% Contactless Application Process with Instant Approval From Top Banks.",
      image: image1,
      bg: "#edffec",
    },
    {
      title: "LOANS",
      description:
        "100% online process. Instant offers. Affordable Rate of Interest on loans.",
      image: image2,
      bg: "#fff1ca",
    },
    {
      title: "BUY NOW PAY LATER",
      description:
        "Short-term financing that allows consumers to make purchases and pay for them over time.",
      image: image3,
      bg: "#ffeee7",
    },
    {
      title: "SAVING ACCOUNTS",
      description:
        "ZET offers range of savings account that suits your personal needs for the banking.",
      image: image4,
      bg: "#fff5e7",
    },
  ];

  return (
    <div className="mb-28">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Products of Zet</h1>

        <p className="mt-1">We are trusted by best brand in the country</p>
      </div>

      <div className="container max-w-5xl mx-auto mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {zetProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { title, description, image, bg } = product;

  return (
    <Tilt scale={1.05} transitionSpeed={2500} tiltAxis={"y"}>
      <div
        className="flex items-center gap-10 p-5 rounded-lg group hover:bg-white h-36"
        style={{ backgroundColor: bg }}
      >
        <div className="grayscale group-hover:grayscale-0">
          <Image src={image} alt="Credit card" className="w-40" />
        </div>

        <div>
          <h1 className="text-xl font-bold uppercase">{title}</h1>

          <p>{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default ProductsOnZet;
