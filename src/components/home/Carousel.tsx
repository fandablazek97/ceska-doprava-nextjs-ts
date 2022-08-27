import Image from "next/future/image";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

type Props = {
  className?: string;
};

export default function Carousel({ className = "" }: Props) {
  return (
    <>
      <Swiper
        modules={[Pagination, Mousewheel]}
        slidesPerView={"auto"}
        centeredSlides={true}
        grabCursor={true}
        cssMode={true}
        mousewheel={true}
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 576px
          640: {
            spaceBetween: 40,
          },
          // when window width is >= 960px
          960: {
            spaceBetween: 80,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className={` ${className}`}
      >
        <SwiperSlide className="mb-24 w-3/4 md:ml-auto md:w-2/3">
          <div className="h-full">
            <div className="aspect-[3/4] md:aspect-video">
              <Image
                src={"/images/conf.jpg"}
                alt={"Konference"}
                width={1920}
                height={1080}
                className="aspect-[3/4] h-full bg-gray-700 object-cover md:aspect-video"
                loading="lazy"
              />
            </div>
            <span className="mt-4 block text-sm tracking-wider text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-24 w-3/4 md:w-2/3">
          <div className="h-full">
            <div className="aspect-[3/4] md:aspect-video">
              <Image
                src={"/images/conf.jpg"}
                alt={"Konference"}
                width={1920}
                height={1080}
                className="aspect-[3/4] h-full bg-gray-700 object-cover md:aspect-video"
                loading="lazy"
              />
            </div>
            <span className="mt-4 block text-sm tracking-wider text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-24 w-3/4 md:w-2/3">
          <div className="h-full">
            <div className="aspect-[3/4] md:aspect-video">
              <Image
                src={"/images/conf.jpg"}
                alt={"Konference"}
                width={1920}
                height={1080}
                className="aspect-[3/4] h-full bg-gray-700 object-cover md:aspect-video"
                loading="lazy"
              />
            </div>
            <span className="mt-4 block text-sm tracking-wider text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-24 w-3/4 md:w-2/3">
          <div className="h-full">
            <div className="aspect-[3/4] md:aspect-video">
              <Image
                src={"/images/conf.jpg"}
                alt={"Konference"}
                width={1920}
                height={1080}
                className="aspect-[3/4] h-full bg-gray-700 object-cover md:aspect-video"
                loading="lazy"
              />
            </div>
            <span className="mt-4 block text-sm tracking-wider text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="h-full w-auto">
          <div className="flex h-full flex-col items-start justify-start">
            <Image
              src={"/images/conf.jpg"}
              alt={"Konference"}
              width={1920}
              height={1080}
              className="aspect-video bg-gray-700 object-cover"
              loading="lazy"
            />
            <span className="block tracking-wider text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
