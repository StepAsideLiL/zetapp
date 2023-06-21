import Marquee from "react-fast-marquee";

import brand1 from "../../assets/images/top-brand/Amex.webp";
import brand2 from "../../assets/images/top-brand/Aufin.webp";
import brand3 from "../../assets/images/top-brand/Axis.webp";
import brand4 from "../../assets/images/top-brand/Bajaj.webp";
import brand5 from "../../assets/images/top-brand/BOB.webp";
import brand6 from "../../assets/images/top-brand/Icici.webp";
import brand7 from "../../assets/images/top-brand/IndusInd.webp";
import brand8 from "../../assets/images/top-brand/StandardChartered.webp";
import brand9 from "../../assets/images/top-brand/YesBank.webp";
import Image from "next/image";

const TopBrands = () => {
  return (
    <div className="text-center mb-28">
      <h1 className="text-2xl font-bold">Top Brands on ZET</h1>

      <p className="mt-1">We are trusted by best brand in the country</p>

      <div className="container max-w-5xl mx-auto mt-10">
        <Marquee pauseOnHover={true}>
          <Image src={brand1} alt="Logo of Amex" className="w-32 mx-10" />
          <Image src={brand2} alt="Logo of Aufin" className="w-32 mx-10" />
          <Image src={brand3} alt="Logo of Axis" className="w-32 mx-10" />
          <Image src={brand4} alt="Logo of Bajaj" className="w-32 mx-10" />
          <Image src={brand5} alt="Logo of BOB" className="w-32 mx-10" />
          <Image src={brand6} alt="Logo of Icici" className="w-32 mx-10" />
          <Image src={brand7} alt="Logo of IndusInd" className="w-32 mx-10" />
          <Image
            src={brand8}
            alt="Logo of StandardChartered"
            className="w-32 mx-10"
          />
          <Image src={brand9} alt="Logo of YesBank" className="w-32 mx-10" />
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
