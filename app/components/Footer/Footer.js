import Image from "next/image";
import bg from "../../assets/images/footer/AboutUs.webp";
import emailIcon from "../../assets/images/footer/EmailIcon.webp";
import phoneIcon from "../../assets/images/footer/PhoneIcon.webp";
import logo from "../../assets/logo/zetapp-w.svg";
import Link from "next/link";

import linkedin from "../../assets/images/footer/linkedin.svg";
import instagram from "../../assets/images/footer/instagram.svg";
import facebook from "../../assets/images/footer/facebook.svg";
import telegram from "../../assets/images/footer/telegram.svg";
import whatsapp from "../../assets/images/footer/whatsapp.svg";

const Footer = () => {
  return (
    <div className="bg-[#006eff] h-screen">
      <div className="container max-w-5xl mx-auto ">
        <div className="pt-10 pb-5 mb-10 border-b border-white">
          <Image src={logo} alt="White logo" className="-ml-5" />
        </div>

        <div className="grid grid-cols-1 gap-3 text-white md:grid-cols-4">
          <div className="grid justify-around grid-cols-3 col-span-1 md:col-span-3">
            <div className="space-y-1 md:space-y-2">
              <h1 className="mb-1 text-lg uppercase">Company</h1>

              <Link href="" className="block">
                About Us
              </Link>
              <Link href="" className="block">
                Partnar With Us
              </Link>
              <Link href="" className="block">
                Blog
              </Link>
            </div>

            <div className="space-y-1 md:space-y-2">
              <h1 className="mb-1 text-lg uppercase">Legal</h1>

              <Link href="" className="block">
                Privacy Policy
              </Link>
              <Link href="" className="block">
                Terms of Use
              </Link>
            </div>

            <div className="space-y-1 md:space-y-2">
              <h1 className="mb-1 text-lg uppercase">Contact</h1>

              <Link href="" className="flex">
                <Image src={emailIcon} alt="Email icon" className="mr-1" />
                <span>hi@zetapp.com</span>
              </Link>
              <Link href="" className="flex">
                <Image src={phoneIcon} alt="Phone icon" className="mr-1" />
                <span>+91-7417274072</span>
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <div className="space-y-1 md:space-y-2">
              <h1 className="mb-1 text-lg uppercase">Social</h1>

              <div className="flex gap-3">
                <Link href="">
                  <Image src={linkedin} alt="Linkedin Icon" />
                </Link>
                <Link href="">
                  <Image src={instagram} alt="Instagram Icon" />
                </Link>
                <Link href="">
                  <Image src={facebook} alt="Facebook Icon" />
                </Link>
                <Link href="">
                  <Image src={telegram} alt="Telegram Icon" />
                </Link>
                <Link href="">
                  <Image src={whatsapp} alt="WhatsApp Icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Fix image height */}
      <Image src={bg} alt="Background" className="" />
    </div>
  );
};

export default Footer;
