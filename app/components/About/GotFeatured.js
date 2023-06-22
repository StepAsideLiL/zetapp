"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import EconomicTimes from "../../assets/images/got-featured/EconomicTimes.webp";
import Inc42 from "../../assets/images/got-featured/Inc42.webp";
import mint from "../../assets/images/got-featured/mint.webp";
import YourStory from "../../assets/images/got-featured/YourStory.webp";
import BusinessStandard from "../../assets/images/got-featured/BusinessStandard.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const GotFeatured = () => {
  return (
    <div className="container max-w-5xl mx-auto mb-28">
      <h1 className="text-4xl font-bold text-[#2f3440] mb-10">Got Featured</h1>

      <div>
        <Swiper slidesPerView={5} spaceBetween={30} className="mySwiper">
          <SwiperSlide>
            <Image src={EconomicTimes} alt="EconomicTimes" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Inc42} alt="Inc42" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={mint} alt="mint" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={YourStory} alt="YourStory" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BusinessStandard} alt="BusinessStandard" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GotFeatured;
