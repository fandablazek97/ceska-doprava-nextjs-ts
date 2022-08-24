import { FaFacebookF, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

type SocialLinksOptions = {
  as?: React.ElementType;
  className?: string;
  [x: string]: any;
};

export default function SocialLinks({
  as: Tag = "div",
  className = "",
  ...rest
}: SocialLinksOptions) {
  // Logic goes here
  return (
    <Tag className={`${className}`} {...rest}>
      <ul className="flex gap-x-8">
        <li>
          <a
            href="https://facebook.com"
            target="blank"
            className="text-xl text-white transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com"
            target="blank"
            className="text-xl text-white transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com"
            target="blank"
            className="text-xl text-white transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com"
            target="blank"
            className="text-xl text-white transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaSpotify />
          </a>
        </li>
      </ul>
    </Tag>
  );
}
