import CookiesPolicy from "@components/cookies/CookiesPolicy";
import Heading from "@components/Heading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";

const CookiesPage: NextPage = () => {
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
          Zásady používání cookies
        </Heading>
      </Wrapper>
      <Wrapper size="sm" className="pb-40">
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
