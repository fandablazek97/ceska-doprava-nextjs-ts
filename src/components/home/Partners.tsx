import SlideUp from "@components/scroll-reveal/SlideUp";

export default function Partners() {
  return (
    <div className="mt-16 grid w-full grid-cols-2 gap-x-12 gap-y-20 md:grid-cols-4 lg:mt-32">
      <SlideUp
        as={"div"}
        className="reveal-delay-0 col-span-1 flex w-full items-center justify-center"
      >
        <div className={`h-[46px] w-[128px]`}>
          <img
            src="/logos/FFP-2022-logo-primary-light.svg"
            alt="Logo značky"
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
        <div className={`h-[46px] w-[128px]`}>
          <img
            src="/logos/FFP-2022-logo-primary-light.svg"
            alt="Logo značky"
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
        <div className={`h-[46px] w-[128px]`}>
          <img
            src="/logos/FFP-2022-logo-primary-light.svg"
            alt="Logo značky"
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
        <div className={`h-[46px] w-[128px]`}>
          <img
            src="/logos/FFP-2022-logo-primary-light.svg"
            alt="Logo značky"
            width="128"
            height="46"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
    </div>
  );
}
