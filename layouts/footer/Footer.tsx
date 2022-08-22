import { BrandLogo } from "@/components/brandLogo";
import { Heading } from "@/components/heading";
import { SocialLinks } from "@/components/socialLinks";
import { Wrapper } from "@/components/wrapper";
import Link from "next/link";
import FooterAuthor from "./FooterAuthor";

export default function Footer() {
  return (
    <footer className="border-t border-solid border-body-100">
      <Wrapper
        size="lg"
        className="grid grid-cols-1 gap-y-12 gap-x-12 py-16 md:grid-cols-2 md:gap-y-20 md:py-24 lg:grid-cols-4"
      >
        {/* Logo + copyright + socky */}
        <div className="col-span-1 flex flex-col items-center justify-center gap-8 text-center md:items-start md:justify-start md:text-left">
          <BrandLogo />
          <span className="block">
            Copyright © {new Date().getFullYear()} Reveal
          </span>
          <SocialLinks />
        </div>

        {/* Navigace */}
        <div className="col-span-1 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading level={3} size="sm">
            Navigace
          </Heading>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/">
                <a className="c-link-3-a text-base font-medium text-muted">
                  Hlavní strana
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="c-link-3-a text-base font-medium text-muted">
                  Program
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="c-link-3-a text-base font-medium text-muted">
                  Link label
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="c-link-3-a text-base font-medium text-muted">
                  Link label
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Další odkazy */}
        <div className="col-span-1 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading level={3} size="sm">
            Další odkazy
          </Heading>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/">
                <a className="c-link-3-a text-base font-medium text-muted">
                  Zpracování cookies
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="c-link-3-a text-base font-medium text-muted">
                  Zpracování osobních údajů
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="c-link-3-a text-base font-medium text-muted">
                  Firemní identita značky
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontakt - Jakub */}
        <div className="col-span-1 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading level={3} size="sm">
            Jakub Flaišman
          </Heading>
          <span className="block text-sm font-medium tracking-widest text-gray-400">
            Jednatel
          </span>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="tel:tel:+420775554479"
                className="c-link-3-a text-base font-medium text-muted"
              >
                +420 775 554 479
              </a>
            </li>
            <li>
              <a
                href="mailto:info@fotofestplzen.cz"
                className="c-link-3-a text-base font-medium text-muted"
              >
                Info@fotofestplzen.cz
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>

      {/* Autor webu - podpis */}
      <Wrapper
        size="lg"
        className="flex items-center justify-center border-t border-solid border-body-100 py-10"
      >
        <FooterAuthor />
      </Wrapper>
    </footer>
  );
}
