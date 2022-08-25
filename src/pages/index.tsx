import Aftermovie from "@components/home/Aftermovie";
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
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Foto fest Plzeň" description="Lorem ipsum dolor sit amet" />
      <Hero />
      <Wrapper size="lg" paddedContent="none">
        <Aftermovie />
      </Wrapper>

      <Wrapper paddedContent="base">
        <MainHeading level={2} number="01" size="2xl">
          Hosté
        </MainHeading>
        <p className="mt-8 max-w-xl text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          voluptates optio provident reprehenderit molestias voluptatibus itaque
          eos, a inventore quos!
        </p>
        <Guests className="mt-20 md:mt-36" />
      </Wrapper>

      <Wrapper paddedContent="base">
        <Exhibitors />
      </Wrapper>

      <Wrapper paddedContent="base">
        <MainHeading level={2} number="03" size="2xl">
          Program
        </MainHeading>
        <p className="mt-8 max-w-xl text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          voluptates optio provident reprehenderit molestias voluptatibus itaque
          eos, a inventore quos!
        </p>
        <Program className="mt-20" />
        <ProgramDesktop className="mt-36" />
      </Wrapper>

      <Wrapper paddedContent="base">
        <Newsletter />
      </Wrapper>

      <Contact />

      <Wrapper paddedContent="base">
        <MainHeading level={2} number="01" size="2xl">
          Faq
        </MainHeading>
        <p className="mt-8 max-w-xl text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          voluptates optio provident reprehenderit molestias voluptatibus itaque
          eos, a inventore quos!
        </p>
        <Faq />
      </Wrapper>

      <Wrapper paddedContent="base">
        <Partners />
      </Wrapper>
    </>
  );
};

export default Home;
