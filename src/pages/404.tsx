import Button from "@components/Button";
import Heading from "@components/Heading";
import MainHeading from "@components/MainHeading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Seo title="Foto fest Plzeň" description="Lorem ipsum dolor sit amet" />
      <Wrapper
        className="flex flex-col items-start justify-start"
        paddedContent="lg"
      >
        <MainHeading level={1} size="3xl" className="pt-20 md:pt-32">
          Stráka nenalazena
        </MainHeading>
        <Heading level={2} size="base">
          Chyba 404
        </Heading>
        <div className="mt-10 flex flex-col items-start gap-10">
          <p className="max-w-xl text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptates optio provident reprehenderit molestias voluptatibus
            itaque eos, a inventore quos!
          </p>
          <Link href={"/"}>
            <Button size="lg">Hlavní strana</Button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;
