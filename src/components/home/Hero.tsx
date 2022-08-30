import Wrapper from "@components/Wrapper";

export default function Hero() {
  return (
    <Wrapper
      as="header"
      className="relative flex h-[90vh] min-h-[640px] items-center justify-start lg:min-h-[728px]"
    >
      {/* Content */}
      <div className="z-10 pt-52 pb-32">
        <div className="anim-slide-up reveal-delay-500 flex items-start justify-start">
          <h1 className="mr-2 font-display text-4xl font-semibold uppercase leading-[1.2] text-white xs:text-5xl sm:text-7xl lg:text-9xl 2xl:text-[11.5rem]">
            Foto fest Plzeň
          </h1>
          <span className="font-display text-base font-normal text-primary xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            2022
          </span>
        </div>
        <p className="anim-slide-up reveal-delay-800 mt-2 max-w-3xl text-base font-medium md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="mt-8 flex flex-col gap-5 md:mt-16 md:flex-row md:gap-14">
          <div className="anim-slide-up reveal-delay-800 flex flex-col bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Datum
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              1.10. 2022
            </span>
          </div>
          <div className="anim-slide-up reveal-delay-1000 flex flex-col bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Místo konání
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              Depo 2015, Plzeň
            </span>
          </div>
          <div className="anim-slide-up reveal-delay-1200 flex flex-col bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Vstupné
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              Zdarma
            </span>
          </div>
        </div>
      </div>
      {/* Subtle effect */}
      {/* <div className="pointer-events-none absolute -top-12 -right-48 -z-10 h-[600px] w-[600px] rounded-full bg-secondary opacity-30 blur-[128px]"></div> */}
    </Wrapper>
  );
}
