import Button from "@components/Button";
import Heading from "@components/Heading";
import MainHeading from "@components/MainHeading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
// import useClipboard from "@hooks/useClipboard";
import copy from "copy-to-clipboard";
import type { NextPage } from "next";
import { HiDownload } from "react-icons/hi";
import { toast } from "react-toastify";

const BrandPage: NextPage = () => {
  const notify = () => toast("Kód barvy byl zkopírován do schránky");
  // const [isPrimaryCopied, setPrimaryCopied] = useClipboard("#D957DB");
  // const [isSecondaryCopied, setSecondaryCopied] = useClipboard("#8D2C82");
  // const [isDarkCopied, setDarkCopied] = useClipboard("#211033");

  return (
    <>
      <Seo title="Foto fest Plzeň" description="Lorem ipsum dolor sit amet" />
      <Wrapper paddedContent="sm">
        <MainHeading level={2} size="3xl" className="pt-20 md:pt-32">
          Grafické podklady
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

      {/* Barvy */}
      <Wrapper paddedContent="sm">
        <Heading level={2} size="xl" font="display">
          Barvy
        </Heading>
        <p className="mt-10 max-w-2xl text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          voluptates optio provident reprehenderit molestias voluptatibus itaque
          eos, a inventore quos!
        </p>
        <div className="grid grid-cols-1 gap-10 py-16 xs:grid-cols-2 md:grid-cols-3">
          <div className="col-span-1 flex aspect-square w-full items-end justify-start bg-secondary p-3 md:p-6">
            <span
              onClick={() => {
                notify();
                copy("#8D2C82");
              }}
              className="c-link-3-a block text-xl font-semibold text-white"
            >
              #8D2C82
            </span>
          </div>
          <div className="col-span-1 flex aspect-square w-full items-end justify-start bg-primary p-3 md:p-6">
            <span
              onClick={() => {
                notify();
                copy("#D957DB");
              }}
              className="c-link-3-a block text-xl font-semibold text-gray-900"
            >
              #D957DB
            </span>
          </div>
          <div className="col-span-1 flex aspect-square w-full items-end justify-start bg-body p-3 shadow-[inset_0px_0px_0px_2px] shadow-gray-200 md:p-6">
            <span
              onClick={() => {
                notify();
                copy("#211033");
              }}
              className="c-link-3-a block text-xl font-semibold text-white"
            >
              #211033
            </span>
          </div>
        </div>
      </Wrapper>

      {/* Loga */}
      <Wrapper paddedContent="sm">
        <Heading level={2} size="xl" font="display">
          Loga ke stažení
        </Heading>
        <p className="mt-10 max-w-2xl text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          voluptates optio provident reprehenderit molestias voluptatibus itaque
          eos, a inventore quos!
        </p>
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 py-16 md:grid-cols-2">
          {/* Hlavní loga */}
          <div className="flex flex-col gap-5">
            <div className="flex aspect-[3/2] items-center justify-center bg-gray-200">
              <div className="h-[92px] w-[256px]">
                <img
                  src="/logos/FFP-2022-logo-primary-dark.svg"
                  alt="Hlavní logo tmavé"
                  width="256"
                  height="92"
                  className="h-full w-full"
                />
              </div>
            </div>
            <Heading level={3} size="base">
              Varianta loga
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              pariatur.
            </p>
            <div className="flex justify-start gap-5">
              <Button
                as="a"
                href="/logos/FFP-2022-logo-primary-dark.svg"
                download
                leftIcon={<HiDownload />}
              >
                SVG
              </Button>
              <Button
                as="a"
                href="/logos/FFP-2022-logo-primary-dark.png"
                download
                leftIcon={<HiDownload />}
              >
                PNG
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex aspect-[3/2] items-center justify-center bg-black">
              <div className="h-[92px] w-[256px]">
                <img
                  src="/logos/FFP-2022-logo-primary-light.svg"
                  alt="Hlavní logo světlé"
                  width="256"
                  height="92"
                  className="h-full w-full"
                />
              </div>
            </div>
            <Heading level={3} size="base">
              Varianta loga
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              pariatur.
            </p>
            <div className="flex justify-start gap-5">
              <Button
                as="a"
                href="/logos/FFP-2022-logo-primary-light.svg"
                download
                leftIcon={<HiDownload />}
              >
                SVG
              </Button>
              <Button
                as="a"
                href="/logos/FFP-2022-logo-primary-light.png"
                download
                leftIcon={<HiDownload />}
              >
                PNG
              </Button>
            </div>
          </div>

          {/* Náhradní loga */}
          <div className="flex flex-col gap-5">
            <div className="flex aspect-[3/2] items-center justify-center bg-gray-200">
              <div className="h-[150px] w-[205px]">
                <img
                  src="/logos/FFP-2022-logo-secondary-dark.svg"
                  alt="Náhradní logo tmavé"
                  width="205"
                  height="150"
                  className="h-full w-full"
                />
              </div>
            </div>
            <Heading level={3} size="base">
              Varianta loga
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              pariatur.
            </p>
            <div className="flex justify-start gap-5">
              <Button
                as="a"
                href="/logos/FFP-2022-logo-secondary-dark.svg"
                download
                leftIcon={<HiDownload />}
              >
                SVG
              </Button>
              <Button
                as="a"
                href="/logos/FFP-2022-logo-secondary-dark.png"
                download
                leftIcon={<HiDownload />}
              >
                PNG
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex aspect-[3/2] items-center justify-center bg-black">
              <div className="h-[150px] w-[205px]">
                <img
                  src="/logos/FFP-2022-logo-secondary-light.svg"
                  alt="Náhradní logo světlé"
                  width="205"
                  height="150"
                  className="h-full w-full"
                />
              </div>
            </div>
            <Heading level={3} size="base">
              Varianta loga
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              pariatur.
            </p>
            <div className="flex justify-start gap-5">
              <Button
                as="a"
                href="/logos/FFP-2022-logo-secondary-light.svg"
                download
                leftIcon={<HiDownload />}
              >
                SVG
              </Button>
              <Button
                as="a"
                href="/logos/FFP-2022-logo-secondary-light.png"
                download
                leftIcon={<HiDownload />}
              >
                PNG
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Vše ke stažení */}
      <Wrapper paddedContent="sm" className="mb-20">
        <div className="flex w-full flex-col items-center justify-center gap-8 bg-secondary py-20 md:py-32">
          <Heading level={2} size="xl" font="display" align="center">
            Komplet + manuál ke stažení
          </Heading>
          <p className="max-w-2xl text-center text-lg text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptates optio provident reprehenderit molestias voluptatibus
            itaque eos, a inventore quos!
          </p>
          <Button
            as="a"
            href="/files/FFP-Kit.zip"
            download
            leftIcon={<HiDownload />}
            size="lg"
          >
            Stáhnout UI Kit
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

export default BrandPage;
