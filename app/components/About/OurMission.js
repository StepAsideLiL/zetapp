import Image from "next/image";
import bg from "../../assets/images/our-mission/OurMission.webp";

const OurMission = () => {
  return (
    <div className="mb-16">
      <Image src={bg} alt="Background" />

      <div className="absolute space-y-3 text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="text-4xl font-bold uppercase">OUR MISSION</h1>

        <div>
          <p>Enabling financial inclusion for the next billion Indians</p>
          <p>
            & making their Zindagi Set. Building a platform that enables you to
            sell
          </p>
          <p>financial products & earn up to Rs. 1 lakh every month.</p>
        </div>

        <h3 className="text-lg font-semibold tracking-widest uppercase">
          EARN BETTER. LIVE BETTER.
        </h3>
      </div>
    </div>
  );
};

export default OurMission;
