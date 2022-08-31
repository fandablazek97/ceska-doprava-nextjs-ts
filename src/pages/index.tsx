import Aftermovie from "@components/home/Aftermovie";
import Carousel from "@components/home/Carousel";
import Contact from "@components/home/Contact";
import Exhibitors from "@components/home/Exhibitors";
import Faq from "@components/home/Faq";
import Guests from "@components/home/Guests";
import Hero from "@components/home/Hero";
import Newsletter from "@components/home/Newsletter";
import Partners from "@components/home/Partners";
import MainHeading from "@components/MainHeading";
import Program from "@components/program/Program";
import ProgramDesktop from "@components/program/ProgramDesktop";
import SlideUp from "@components/scroll-reveal/SlideUp";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";

// To Do
// Sitemapa generátor
// Komponent "program již brzy"
// Seo
// Finální content

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Největší fotografická akce na západě Čech"
        description="Lorem ipsum dolor sit amet"
      />
      <Hero />
      <Wrapper as={"section"} id="aftermovie" size="lg" paddedContent="none">
        <Aftermovie />
      </Wrapper>

      <Wrapper as={"section"} paddedContent="base">
        <SlideUp>
          <MainHeading level={2} number="01" size="2xl">
            Hosté
          </MainHeading>
        </SlideUp>
        <SlideUp
          as={"p"}
          delay="200"
          className="mt-8 max-w-prose text-lg font-medium"
        >
          Zajímá tě, s kým se letos na festivalu potkáš? Stay tuned! Brzy
          odhalíme lektory a speakery, kteří za vámi dorazí.
        </SlideUp>
        <Guests className="mt-20 md:mt-36" />
      </Wrapper>

      <Wrapper as={"section"} id="vystavovatele" paddedContent="base">
        <div className="flex flex-col items-center justify-center">
          <SlideUp>
            <MainHeading level={2} size="2xl" number="02">
              Vystavovatelé
            </MainHeading>
          </SlideUp>
          <SlideUp
            as={"p"}
            delay="200"
            className="mt-8 max-w-prose text-center text-lg font-medium"
          >
            Přijď si vyzkoušet techniku těchto značek, omrknout novinky a
            poradit se s výběrem nového kousku.
          </SlideUp>
          <Exhibitors />
        </div>
      </Wrapper>

      <Wrapper as={"section"} id="program" paddedContent="base">
        <SlideUp>
          <MainHeading level={2} number="03" size="2xl">
            Program
          </MainHeading>
        </SlideUp>
        <SlideUp
          as={"p"}
          delay="200"
          className="mt-8 max-w-prose text-lg font-medium"
        >
          I letos se držíme osvědčené taktiky, program bude složený z přednášek
          a workshopů na čtyřech stagích. Přednášky, stejně jako minule, budou
          volně přístupné pro všechny návštěvníky. Na workshopy se letos budeš
          muset registrovat nebo si na něj zakoupit vstupenku, záleží na jaký
          půjdeš. Pokud chceš mít místo na workshopy jasný, sleduj naše sítě,
          odebírej newsletter nebo se přidej k události.
        </SlideUp>
        <Program className="mt-20" />
        <ProgramDesktop className="mt-36" />
      </Wrapper>

      <Wrapper as={"section"} id="newsletter" paddedContent="base">
        <SlideUp>
          <Newsletter />
        </SlideUp>
      </Wrapper>

      <Contact />

      <Wrapper as={"section"} id="faq" paddedContent="base">
        <SlideUp>
          <MainHeading level={2} number="05" size="2xl">
            Faq
          </MainHeading>
        </SlideUp>
        <SlideUp
          as={"p"}
          delay="200"
          className="mt-8 max-w-xl text-lg font-medium"
        >
          Odpovědi na to, na co se nás často ptáte.
        </SlideUp>
        <Faq />
      </Wrapper>

      <section className="py-24 xl:py-32">
        <Carousel />
      </section>

      <Wrapper
        as={"section"}
        id="vystavovatele"
        paddedContent="base"
        className="mb-24"
      >
        <div className="flex flex-col items-center justify-center">
          <SlideUp>
            <MainHeading level={2} size="2xl" number="06">
              Partneři
            </MainHeading>
          </SlideUp>
          <SlideUp
            as={"p"}
            delay="200"
            className="mt-8 max-w-3xl text-center text-lg font-medium"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptates optio provident reprehenderit molestias voluptatibus
            itaque eos, a inventore quos!
          </SlideUp>
          <Partners />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
