import Image from "next/image";
import image from "../../assets/images/office-view/AboutUsFooter.webp";

const OurOfficeView = () => {
  return (
    <div className="mb-3">
      <Image src={image} alt="About us footer" />
    </div>
  );
};

export default OurOfficeView;
