import GdprPolicy from "@components/gdpr/GdprPolicy";
import Heading from "@components/Heading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";

const GdprPage: NextPage = () => {
  return (
    <>
      <Seo title="Foto fest Plzeň" description="Lorem ipsum dolor sit amet" />
      <Wrapper className="pt-24 md:pb-16 md:pt-36">
        <Heading
          level={1}
          size="3xl"
          font="display"
          className="pt-20 md:pt-32"
          align="center"
        >
          Zpracování osobních údajů
        </Heading>
      </Wrapper>
      <Wrapper size="sm" className="pt-24 pb-40">
        <GdprPolicy
          ownerName="Jakub Flaišman"
          adress="Na Belánce 14"
          email="info@fotofestplzen.cz"
          phone="+420 123 456 789"
          ico="123456789"
          takesEffectDate="1. 9. 2022"
        />
      </Wrapper>
    </>
  );
};

export default GdprPage;
