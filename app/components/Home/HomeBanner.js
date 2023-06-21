import Image from "next/image";
import bannerImage from "../../assets/images/banner/HeroImgNew.webp";
import appDownload from "../../assets/images/banner/download.svg";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="container flex items-center justify-center max-w-5xl gap-10 p-10 mx-auto my-10">
      <div className="space-y-3">
        <h1 className="text-[40px] font-bold">
          Become a Financial Advisor and{" "}
          <span className="text-blue-600">Earn Rs.1 Lakh/Month</span>
        </h1>

        <p>No investment required</p>

        <Link
          href="https://play.google.com/store/apps/details?id=in.onecode.app"
          target="_blank"
        >
          <Image src={appDownload} alt="Download icons" />
        </Link>
      </div>

      {/* TODO: Fix the size of the image */}
      <div>
        <Image src={bannerImage} alt="Banner Image" className="w-full" />
      </div>
    </div>
  );
};

export default HomeBanner;
