import Button from "@components/Button";
import Heading from "@components/Heading";
import MainHeading from "@components/MainHeading";
import Program from "@components/program/Program";
import ProgramDesktop from "@components/program/ProgramDesktop";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";
import { HiDownload } from "react-icons/hi";

const ProgramPage: NextPage = () => {
  return (
    <>
      <Seo title="Foto fest Plzeň" description="Lorem ipsum dolor sit amet" />
      <Wrapper paddedContent="sm">
        <MainHeading level={2} size="3xl" className="pt-20 md:pt-32">
          Program
        </MainHeading>
        <div className="grid w-full grid-cols-1 gap-10 py-10 md:grid-cols-2 md:gap-16">
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptates optio provident reprehenderit molestias voluptatibus
            itaque eos, a inventore quos!
          </p>
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptates optio provident reprehenderit molestias voluptatibus
            itaque eos, a inventore quos!
          </p>
        </div>
      </Wrapper>

      <Wrapper paddedContent="sm">
        <Program />
        <ProgramDesktop className="mt-10" />
      </Wrapper>

      <Wrapper paddedContent="base">
        <Heading level={2} size="xl" font="display">
          Mapa areálu
        </Heading>
        <p className="mt-10 max-w-2xl text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          voluptates optio provident reprehenderit molestias voluptatibus itaque
          eos, a inventore quos!
        </p>
        <Button
          as="a"
          href="/images/conf.jpg"
          download
          leftIcon={<HiDownload />}
          className="mt-10"
          size="lg"
        >
          Stáhnout mapu areálu
        </Button>
      </Wrapper>

      <Wrapper size="lg" className="pb-28 md:pb-52">
        <div className="aspect-video w-full bg-body-100">
          <img
            src="/images/conf.jpg"
            alt="Mapa areálu festivalu"
            className="h-full w-full object-cover"
          />
        </div>
      </Wrapper>
    </>
  );
};

export default ProgramPage;
