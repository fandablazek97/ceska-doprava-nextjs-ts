import Heading from "@components/Heading";
import RegistrationModal from "./RegistrationModal";

type Props = {
  speaker: string;
  category: string;
  name: string;
  time: string;
  hasRegistration: boolean;
  isPaid: boolean;
  shopLink: string;
  className?: string;
};

export default function ProgramCard({
  speaker,
  category,
  name,
  time,
  hasRegistration,
  isPaid,
  shopLink,
  className = "",
}: Props) {
  return (
    <li className={`flex w-full flex-col items-center gap-3 py-8 ${className}`}>
      <Heading level={4} size="sm" align="center">
        {speaker}
      </Heading>
      <span className="text-center text-sm leading-tight tracking-widest text-gray-400">
        {category}
      </span>
      <span className="text-center text-lg leading-tight text-white">
        {name}
      </span>
      <span className="text-center text-lg leading-tight tracking-widest text-gray-400">
        {time}
      </span>
      {hasRegistration && !isPaid && <RegistrationModal />}
      {hasRegistration && isPaid && (
        <a
          href={shopLink}
          target="blank"
          className="c-link-3-a text-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary"
        >
          Koupit vstupenku
        </a>
      )}
    </li>
  );
}
