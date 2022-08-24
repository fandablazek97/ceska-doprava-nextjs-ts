import Button from "@components/Button";
import SocialLinks from "@components/SocialLinks";
import { HiCalendar } from "react-icons/hi";

type NavbarAdditionalLinksOptions = {
  className?: string;
};

export default function NavbarAdditionalLinks({
  className = "",
}: NavbarAdditionalLinksOptions) {
  return (
    <div className={`flex items-center gap-x-6 md:gap-x-10 ${className}`}>
      <SocialLinks className="hidden lg:block" />
      <Button
        as="a"
        href="https://facebook.com/"
        target="_blank"
        size="sm"
        leftIcon={<HiCalendar />}
        className="hidden sm:inline-flex"
      >
        Událost
      </Button>
    </div>
  );
}
