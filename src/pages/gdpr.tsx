import GdprPolicy from "@components/gdpr/GdprPolicy";
import MainHeading from "@components/MainHeading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";

const GdprPage: NextPage = () => {
  return (
    <>
      <Seo title="Foto fest Plzeň" description="Lorem ipsum dolor sit amet" />
      <Wrapper paddedContent="sm">
        <MainHeading level={2} size="3xl" className="pt-20 md:pt-32">
          Zpracování osobních údajů
        </MainHeading>
      </Wrapper>
      <Wrapper paddedContent="base">
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
