"use client";

import Image from "next/image";
import image from "../../assets/images/the-zet-effect/peeps1.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const TheZetEffect = () => {
  return (
    <div
      className="bg-[#145cc5] py-40"
      style={{ clipPath: "polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)" }}
    >
      <div
        className="bg-[#417fda] container mx-auto max-w-5xl flex items-center"
        style={{ clipPath: "polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)" }}
      >
        <div>
          <Image
            src={image}
            alt="Our customer"
            className="mix-blend-luminosity"
          />
        </div>

        <div className="space-y-3 text-white w-[420px] -ml-28">
          <h1 className="text-xl font-semibold tracking-wider">
            The Zet Effect
          </h1>

          <Swiper
            pagination={{
              type: "progressbar",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <h1 className="py-3 text-3xl font-medium">
                14 Lakh+ Financial Advisor across India are using ZET to
                increase their income.
              </h1>
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="py-3 text-3xl font-medium">
                We helped customers in more than 50 cityes to get their first
                financial product
              </h1>
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="py-3 text-3xl font-medium">
                More then ₹20 Cr earned by our Agents by selling Credit Cards
                and loans
              </h1>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TheZetEffect;
