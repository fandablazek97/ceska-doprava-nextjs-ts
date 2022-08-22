import { Wrapper } from "@/components/wrapper";

export default function Hero() {
  return (
    <Wrapper
      as="header"
      className="flex h-[80vh] min-h-[640px] items-center justify-start lg:min-h-[728px]"
    >
      <div className="pt-48 pb-32">
        <div className="flex items-start justify-start">
          <h1 className="mr-2 font-display text-4xl font-semibold uppercase leading-[1.2] text-white xs:text-5xl sm:text-7xl lg:text-9xl">
            Foto fest Plzeň
          </h1>
          <span className="font-display text-base font-normal text-primary xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
            2022
          </span>
        </div>
        <p className="mt-2 max-w-3xl text-base font-medium xs:text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. className
          aptent taciti sociosqu ad litora torquent per conubia nostra odio.
        </p>
        <div className="mt-8 flex flex-col gap-5 md:mt-16 md:flex-row md:gap-14">
          <div className="flex flex-col bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Datum
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              1.10. 2022
            </span>
          </div>
          <div className="flex flex-col bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Místo konání
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              Depo 2015, Plzeň
            </span>
          </div>
          <div className="flex flex-col bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Vstupné
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              Zdarma
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
