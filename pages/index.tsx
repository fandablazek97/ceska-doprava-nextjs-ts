import { MainHeading } from "@/components/mainHeading";
import Seo from "@/components/Seo";
import { Wrapper } from "@/components/wrapper";
import Aftermovie from "@/routes/home/Aftermovie";
import Contact from "@/routes/home/Contact";
import Exhibitors from "@/routes/home/Exhibitors";
import Faq from "@/routes/home/Faq";
import Guests from "@/routes/home/Guests";
import Hero from "@/routes/home/Hero";
import Newsletter from "@/routes/home/Newsletter";
import Partners from "@/routes/home/Partners";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Ui framework"
        description="Nextjs ui framework v2 made with typescript"
      />
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
