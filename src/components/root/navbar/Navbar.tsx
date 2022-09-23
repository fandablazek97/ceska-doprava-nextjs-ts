import BrandLogo from "@components/BrandLogo";
import Wrapper from "@components/Wrapper";
import useScrollListener from "@hooks/useScrollListener";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import NavbarAdditionalLinks from "./NavbarAdditionalLinks";
import NavbarMainLinks from "./NavbarMainLinks";

export default function Navbar() {
  // // State
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // // use Scroll Listener hook
  const scroll = useScrollListener();

  useEffect(() => {
    // Aktivuje třídu po scrollnutí o více než 60px
    if (scroll.y > 60) {
      setIsNavbarScrolled(true);
    } else {
      setIsNavbarScrolled(false);
    }

    // // Skryje / ukáže navigaci na základě podmínky
    // if (scroll.y > 540 && scroll.y - scroll.lastY > 0) {
    //   setIsNavbarVisible(false);
    // } else {
    //   setIsNavbarVisible(true);
    // }
  }, [scroll.y, scroll.lastY]);
  return (
    // <nav
    //   className={`fixed z-[100] w-screen transform-gpu border-b border-solid border-body-100 bg-body backdrop-blur transition-[background,border,transform,height,box-shadow] duration-[400ms] ease-in-out ${
    //     isNavbarScrolled
    //       ? "h-20 border-opacity-100 bg-opacity-70"
    //       : "h-20 border-opacity-0 bg-opacity-0 md:h-28"
    //   } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full shadow-none"}`}
    // >
    <nav
      className={`fixed z-[100] h-20 w-screen transition duration-500 ${
        isNavbarScrolled ? "bg-body shadow-2xl" : "bg-transparent"
      }`}
    >
      <Wrapper
        size="lg"
        className="flex h-full items-center justify-between gap-6 md:gap-10 xl:gap-16"
      >
        <Link href="/">
          <a className="z-[110] mr-auto max-w-[128px] scale-[0.85] outline-none focus-visible:ring-4 focus-visible:ring-primary/70 sm:max-w-[160px] sm:scale-100">
            <BrandLogo />
          </a>
        </Link>
        <NavbarMainLinks className="hidden lg:flex" />
        <NavbarAdditionalLinks />
        <Menu />
      </Wrapper>
    </nav>
  );
}
