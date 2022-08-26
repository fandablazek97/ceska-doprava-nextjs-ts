import Button from "@components/Button";
import Heading from "@components/Heading";
import MainHeading from "@components/MainHeading";
import Wrapper from "@components/Wrapper";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

// Icons
import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import { HiDocumentDuplicate, HiPaperAirplane } from "react-icons/hi";

export default function Contact() {
  const notify = () => toast("Adresa byla zkopírována do schránky");
  return (
    <>
      <Wrapper as={"section"} id="kontakt" paddedContent="sm">
        <div className="lg:grid lg:grid-cols-7 lg:gap-32">
          <MainHeading level={2} number="04" size="2xl" className="col-span-2">
            Kontakt
          </MainHeading>
          {/* Kontakt Kuba */}
          <div className="col-span-2 mt-8 flex flex-col lg:mt-0">
            <Heading level={3} size="sm" font="display">
              Jakub Flaišman
            </Heading>
            <span className="mt-1 block font-medium tracking-widest text-gray-400">
              Jednatel
            </span>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="tel:+420775554479"
                className="c-link-3-a text-lg font-medium text-white outline-none focus-visible:ring-4 focus-visible:ring-primary/70"
              >
                +420 775 554 479
              </a>
              <a
                href="mailto:info@fotofestplzen.cz"
                className="c-link-3-a text-lg font-medium text-white outline-none focus-visible:ring-4 focus-visible:ring-primary/70"
              >
                Info@fotofestplzen.cz
              </a>
            </div>
          </div>

          {/* Socky */}
          <div className="col-span-3 mt-8 flex flex-col lg:mt-0">
            <Heading level={3} size="sm" font="display">
              SLedujte nás
            </Heading>
            <div className="mt-6 flex gap-3 xs:gap-6 md:gap-10">
              <Button
                as="a"
                href="https://facebook.com"
                target="blank"
                aria-label="Facebook"
                type="outlined"
                isIconBox={true}
                shape="pill"
              >
                <FaFacebookF />
              </Button>
              <Button
                as="a"
                href="https://facebook.com"
                target="blank"
                aria-label="Instagram"
                type="outlined"
                isIconBox={true}
                shape="pill"
              >
                <FaInstagram />
              </Button>
              <Button
                as="a"
                href="https://facebook.com"
                target="blank"
                aria-label="Youtube"
                type="outlined"
                isIconBox={true}
                shape="pill"
              >
                <FaYoutube />
              </Button>
              <Button
                as="a"
                href="https://facebook.com"
                target="blank"
                aria-label="Spotify"
                type="outlined"
                isIconBox={true}
                shape="pill"
              >
                <FaSpotify />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-16 md:pt-28 lg:grid lg:grid-cols-7 lg:gap-32">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            className="col-span-2"
          >
            Místo konání
          </Heading>
          {/* Kontakt Kuba */}
          <div className="col-span-5 mt-8 flex flex-col lg:mt-0">
            <Heading level={3} size="lg">
              Depo 2015, Plzeň
            </Heading>
            <span className="mt-1 block text-white">
              Presslova 14, 301 00 Plzeň 3-Jižní Předměstí
            </span>
            <div className="mt-6 flex gap-3 xs:gap-6 md:gap-10">
              <Button
                aria-label="Zkopírování adresy místa konání"
                onClick={() => {
                  notify();
                  copy("Presslova 14, 301 00 Plzeň 3-Jižní Předměstí");
                }}
                as="button"
                isIconBox={true}
                shape="pill"
              >
                <HiDocumentDuplicate />
              </Button>
              <Button
                as="a"
                href="https://www.google.com/maps/dir//DEPO2015,+Presslova+14,+301+00+Plzeň+3-Jižn%C3%AD+Předměst%C3%AD/@49.7385211,13.3792283,17z/data=!3m1!5s0x470af1e1c2de49bb:0x5b63353c5a91cad6!4m9!4m8!1m0!1m5!1m1!1s0x470af1e1db0327df:0xe07126f9b5cb10fe!2m2!1d13.3814223!2d49.7385177!3e0"
                target="blank"
                aria-label="Navigace na místo konání pomocí google map"
                type="filled"
                isIconBox={true}
                shape="pill"
              >
                <HiPaperAirplane />
              </Button>
              <Button
                as="a"
                href="https://www.depo2015.cz"
                target="blank"
                aria-label="Webová stránka Depo 2015"
                type="filled"
                isIconBox={true}
                shape="pill"
              >
                <FaGlobe />
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Mapa */}
      <Wrapper size="lg" className="mt-8 md:mt-14">
        <iframe
          title="Místo konání festivalu"
          src="https://maps.google.com/maps?q=depo%202015%20Plze%C5%88&t=k&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          className="aspect-square w-full md:aspect-[2/1]"
          loading="lazy"
        />
      </Wrapper>
    </>
  );
}
