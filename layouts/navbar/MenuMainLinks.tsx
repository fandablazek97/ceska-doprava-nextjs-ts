import Link from "next/link";
import { mainRoutes } from "./routes";

type MenuMainLinksOptions = {
  className?: string;
  onEachLinkClick?: () => void;
};

export default function MenuMainLinks({
  className = "",
  onEachLinkClick,
}: MenuMainLinksOptions) {
  return (
    <ul
      className={`flex list-none flex-col space-y-5 leading-none ${className}`}
    >
      {mainRoutes.map((route) => (
        <li key={route.label}>
          <Link href={route.path}>
            <a
              className="c-link-3-a text-2xl font-bold text-rich md:text-4xl xl:text-5xl"
              onClick={onEachLinkClick}
            >
              {route.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
