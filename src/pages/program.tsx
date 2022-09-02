// import Alert from "@components/Alert";
// import Button from "@components/Button";
import Heading from "@components/Heading";
import MainHeading from "@components/MainHeading";
// import Program from "@components/program/Program";
// import ProgramDesktop from "@components/program/ProgramDesktop";
import PendingContent from "@components/home/PendingContent";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";
// import { HiDownload } from "react-icons/hi";

const ProgramPage: NextPage = () => {
  return (
    <>
      <Seo title="Program a mapa" description="" />
      <Wrapper as={"header"} paddedContent="sm">
        <MainHeading level={2} size="3xl" className="pt-20 md:pt-32">
          Program
        </MainHeading>
        <div className="grid w-full grid-cols-1 gap-10 py-10 md:grid-cols-2 md:gap-16">
          <p className="text-lg font-medium">
            I letos se držíme osvědčené taktiky, program bude složený z
            přednášek a workshopů na čtyřech stagích. Přednášky, stejně jako
            minule, budou volně přístupné pro všechny návštěvníky.
          </p>
          <p className="text-lg font-medium">
            Na workshopy se letos budeš muset registrovat nebo si na něj
            zakoupit vstupenku, záleží na jaký půjdeš. Pokud chceš mít místo na
            workshopy jasný, sleduj naše sítě, odebírej newsletter nebo se
            přidej k události.
          </p>
        </div>
      </Wrapper>

      <Wrapper as={"section"} id="program" paddedContent="sm">
        <PendingContent className="mt-10 md:mt-16" />
        {/* <Alert
          status="info"
          variant="filled"
          hasIcon={false}
          title="Výběr stage"
          text="Stage lze horizontálně posouvat. Pro zobrazení programu z jiné stage stačí najet a kliknout na jinou"
          className="block text-primary sm:hidden"
        />
        <Program className="mt-4 sm:mt-0" />
        <ProgramDesktop hasBackground={false} className="mt-10" /> */}
      </Wrapper>

      <Wrapper as={"section"} id="mapa" paddedContent="base">
        <Heading level={2} size="xl" font="display">
          Mapa areálu
        </Heading>
        <PendingContent className="mt-10 md:mt-20" />
        {/* <p className="mt-10 max-w-2xl text-lg font-medium">
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
        </Button> */}
      </Wrapper>

      {/* <Wrapper size="lg" className="pb-28 md:pb-52">
        <div className="aspect-video w-full bg-body-100">
          <img
            src="/images/map.jpg"
            alt="Mapa areálu festivalu"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </Wrapper> */}
    </>
  );
};

export default ProgramPage;
