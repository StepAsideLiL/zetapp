import Image from "next/image";
import growthGraph from "../../assets/images/how-we-evolved/Growth.webp";

const HowWeEvolved = () => {
  return (
    <div className="mb-28">
      <h1 className="text-center text-4xl font-bold text-[#2f3440] mb-10">
        How we evolved over the years
      </h1>

      <div className="container max-w-5xl mx-auto">
        <Image src={growthGraph} alt="Growth Graph" />
      </div>
    </div>
  );
};

export default HowWeEvolved;
