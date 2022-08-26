import { ctaMenu } from "./routes";

type MenuAdditionalLinksOptions = {
  className?: string;
  onEachLinkClick?: () => void;
};

export default function MenuAdditionalLinks({
  className = "",
  onEachLinkClick,
}: MenuAdditionalLinksOptions) {
  return (
    <ul
      className={`flex list-none flex-col space-y-4 leading-none ${className}`}
    >
      {ctaMenu.map((item) => (
        <li key={item.label}>
          <a
            href={item.link}
            className="c-link-3-a text-lg font-semibold text-primary xl:text-2xl"
            onClick={onEachLinkClick}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
