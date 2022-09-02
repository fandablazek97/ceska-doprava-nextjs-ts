import SlideUp from "@components/scroll-reveal/SlideUp";

export default function Exhibitors() {
  return (
    <div className="mt-16 grid w-full grid-cols-2 gap-x-12 gap-y-20 md:grid-cols-4 lg:mt-32 xl:grid-cols-6">
      <SlideUp
        as={"div"}
        className="reveal-delay-0 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[140px]`}>
          <img
            src="/logos/brands/sony.svg"
            alt="Logo Sony"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-100 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[140px]`}>
          <img
            src="/logos/brands/canon.svg"
            alt="Logo Canon"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-0 md:reveal-delay-200 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[140px]`}>
          <img
            src="/logos/brands/nikon.svg"
            alt="Logo Nikon"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-100 md:reveal-delay-300 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[140px]`}>
          <img
            src="/logos/brands/tamron.svg"
            alt="Logo Tamron"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-0 xl:reveal-delay-400 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[140px]`}>
          <img
            src="/logos/brands/peak-design.svg"
            alt="Logo Peak Design"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-100 xl:reveal-delay-500 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[140px]`}>
          <img
            src="/logos/brands/manfortto.svg"
            alt="Logo Manfortto"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-0 md:reveal-delay-200 xl:reveal-delay-0 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[140px]`}>
          <img
            src="/logos/brands/focus-nordic.svg"
            alt="Logo Focus Nordic"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-100 md:reveal-delay-300 xl:reveal-delay-100 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[160px]`}>
          <img
            src="/logos/brands/phototools.svg"
            alt="Logo Phototools"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-0 xl:reveal-delay-200 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[140px]`}>
          <img
            src="/logos/brands/irix.svg"
            alt="Logo Irix"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-100 xl:reveal-delay-300 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[160px]`}>
          <img
            src="/logos/brands/3lt.svg"
            alt="Logo 3lt"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"div"}
        className="reveal-delay-0 md:reveal-delay-200 xl:reveal-delay-400 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[64px] w-[160px]`}>
          <img
            src="/logos/brands/kvalitni-fotky.svg"
            alt="Logo Kvalitní fotky"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
    </div>
  );
}
