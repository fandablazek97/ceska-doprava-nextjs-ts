import BrandLogo from "@components/BrandLogo";
import Wrapper from "@components/Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import NavbarAdditionalLinks from "./NavbarAdditionalLinks";
import NavbarMainLinks from "./NavbarMainLinks";

export default function Navbar() {
  // // State
  // const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // // use Scroll Listener hook
  // const scroll = useScrollListener();

  // useEffect(() => {
  //   // Aktivuje třídu po scrollnutí o více než 60px
  //   if (scroll.y > 60) {
  //     setIsNavbarScrolled(true);
  //   } else {
  //     setIsNavbarScrolled(false);
  //   }

  //   // Skryje / ukáže navigaci na základě podmínky
  //   if (scroll.y > 540 && scroll.y - scroll.lastY > 0) {
  //     setIsNavbarVisible(false);
  //   } else {
  //     setIsNavbarVisible(true);
  //   }
  // }, [scroll.y, scroll.lastY]);
  return (
    // <nav
    //   className={`fixed z-[100] w-screen transform-gpu border-b border-solid border-body-100 bg-body backdrop-blur transition-[background,border,transform,height,box-shadow] duration-[400ms] ease-in-out ${
    //     isNavbarScrolled
    //       ? "h-20 border-opacity-100 bg-opacity-70"
    //       : "h-20 border-opacity-0 bg-opacity-0 md:h-28"
    //   } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full shadow-none"}`}
    // >
    <nav className={`fixed z-[100] h-20 w-screen bg-body/80 backdrop-blur`}>
      <Wrapper
        size="lg"
        className="flex h-full items-center justify-between gap-6 md:gap-10 xl:gap-16"
      >
        <NavbarMainLinks className="hidden lg:flex" />
        <Menu className="lg:hidden" />
        <Link href="/">
          <a className="absolute top-1/2 left-1/2 z-[120] max-w-[128px] -translate-y-1/2 -translate-x-1/2 sm:max-w-[160px]">
            <BrandLogo className="origin-left scale-[0.8] sm:scale-100" />
          </a>
        </Link>
        <NavbarAdditionalLinks />
      </Wrapper>
    </nav>
  );
}
