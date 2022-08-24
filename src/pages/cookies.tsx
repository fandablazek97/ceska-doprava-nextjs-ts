import CookiesPolicy from "@components/cookies/CookiesPolicy";
import MainHeading from "@components/MainHeading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";

const CookiesPage: NextPage = () => {
  return (
    <>
      <Seo title="Foto fest Plzeň" description="Lorem ipsum dolor sit amet" />
      <Wrapper paddedContent="sm">
        <MainHeading level={2} size="3xl" className="pt-20 md:pt-32">
          Zásady používání cookies
        </MainHeading>
      </Wrapper>
      <Wrapper paddedContent="base">
        <CookiesPolicy
          domain="https://fotofestplzen.cz"
          ownerName="Jakub Flaišman"
          adress="Na Belánce 15"
          ico="123456789"
          validTime="šest měsíců"
          lastUpdated="16. 12. 2021"
        />
      </Wrapper>
    </>
  );
};

export default CookiesPage;
