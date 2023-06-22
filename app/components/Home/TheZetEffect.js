"use client";

import Image from "next/image";
import peepsBg from "../../assets/images/the-zet-effect/peeps1.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TheZetEffect = () => {
  return (
    <div
      className="bg-[#145cc5] p-28"
      style={{ clipPath: "polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)" }}
    >
      <div className="container max-w-5xl mx-auto">
        <div
          className="flex items-center"
          style={{ clipPath: "polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)" }}
        >
          <Image src={peepsBg} alt="Our People" className="" />

          <div className="-ml-20">
            <div className="space-y-2 text-white">
              <h1 className="font-medium uppercase">THE ZET EFFECT</h1>

              <Swiper
                pagination={{
                  type: "progressbar",
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <h1 className="text-4xl font-medium">
                    14 Lakh+ Financial Advisor across India are using ZET to
                    increase their income.
                  </h1>
                </SwiperSlide>

                <SwiperSlide>
                  <h1 className="text-4xl font-medium">
                    We helped customers in more than 50 cities to get their
                    first financial product
                  </h1>
                </SwiperSlide>

                <SwiperSlide>
                  <h1 className="text-4xl font-medium">
                    We helped customers in more than 50 cities to get their
                    first financial product
                  </h1>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheZetEffect;
