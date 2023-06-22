import Image from "next/image";
import coustomer from "../../assets/images/why-choose-us/whyUsHero.webp";
import icon1 from "../../assets/images/why-choose-us/zero-investment.svg";
import icon2 from "../../assets/images/why-choose-us/quick-payout.svg";
import icon3 from "../../assets/images/why-choose-us/limitless-warning.svg";
import icon4 from "../../assets/images/why-choose-us/training-and-learning.svg";
import icon5 from "../../assets/images/why-choose-us/customer-support.svg";
import icon6 from "../../assets/images/why-choose-us/financial-products.svg";

const WhyChooseUs = () => {
  const ourServices = [
    {
      title: "Zero Investment",
      description: "Build your business without any investment",
      icon: icon1,
    },
    {
      title: "Quick Payout",
      description: "Direct Payout in your bank account in short time",
      icon: icon2,
    },
    {
      title: "Limitless Earnings",
      description: "Direct Payout in your bank account in short time",
      icon: icon3,
    },
    {
      title: "Training & Upskilling",
      description: "Get trained by finance and sales experts",
      icon: icon4,
    },
    {
      title: "Customer Support",
      description: "Access tools and content to build relationship",
      icon: icon5,
    },
    {
      title: "Financial Products",
      description: "Trustworthy & high-rated products & categories",
      icon: icon6,
    },
  ];

  return (
    <div className="mb-28">
      <div className="container grid items-center max-w-5xl grid-cols-3 gap-10 mx-auto">
        <div className="col-span-1 text-center">
          <h1 className="text-2xl font-bold">
            Why <span className="text-[#145CC5]">Choose Us</span>
          </h1>

          <p className="text-lg">Why we are loved by our customers</p>

          <div className="text-center">
            <Image src={coustomer} alt="Happy customer" className="mt-10" />
          </div>
        </div>

        <div className="grid grid-cols-2 col-span-2 gap-10">
          {ourServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;

  return (
    <div>
      <Image src={icon} alt="Service icon" />

      <h1 className="text-xl font-bold tracking-wider">{title}</h1>

      <p>{description}</p>
    </div>
  );
};

export default WhyChooseUs;
