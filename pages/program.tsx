import { MainHeading } from "@/components/mainHeading";
import Seo from "@/components/Seo";
import { Wrapper } from "@/components/wrapper";
import Program from "@/routes/home/Program";
import ProgramDesktop from "@/routes/home/ProgramDesktop";
import type { NextPage } from "next";

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
    </>
  );
};

export default ProgramPage;
