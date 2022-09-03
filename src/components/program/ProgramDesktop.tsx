import Heading from "@components/Heading";
import ProgramCard from "./ProgramCard";
import { atelier, klempirna, kontejnery, nadvori } from "./programData";

type Props = {
  className?: string;
  hasBackground?: boolean;
};

export default function ProgramDesktop({
  className = "",
  hasBackground = true,
}: Props) {
  return (
    <div
      className={`relative hidden lg:flex lg:flex-col lg:gap-6 xl:gap-10 ${className}`}
    >
      {/* Efekt v pozadí */}
      {hasBackground && (
        <div className="pointer-events-none absolute -top-14 -z-10 h-screen w-screen bg-gradient-to-tr from-body via-body to-secondary opacity-30 lg:h-[1200px]"></div>
      )}

      {/* Nadpisy */}
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col gap-3 text-left">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            weight="medium"
          >
            Ateliér
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            weight="medium"
          >
            Klempírna
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            weight="medium"
          >
            Nádvoří
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            weight="medium"
          >
            Kontejnery
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </div>
      </div>

      {/* Program */}
      <div className="grid grid-cols-4 items-start lg:gap-6 xl:gap-10">
        <div className="w-full bg-gray-700/50 p-6">
          <ul className="flex w-full flex-col divide-y divide-gray-600/80">
            {atelier.map((item) => (
              <ProgramCard
                key={item.id}
                speaker={item.speaker}
                category={item.category}
                name={item.name}
                time={item.time}
                hasRegistration={item.hasRegistration}
                isPaid={item.isPaid}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-700/50 p-6">
          <ul className="flex w-full flex-col divide-y divide-gray-600/80">
            {klempirna.map((item) => (
              <ProgramCard
                key={item.id}
                speaker={item.speaker}
                category={item.category}
                name={item.name}
                time={item.time}
                hasRegistration={item.hasRegistration}
                isPaid={item.isPaid}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-700/50 p-6">
          <ul className="flex w-full flex-col divide-y divide-gray-600/80">
            {nadvori.map((item) => (
              <ProgramCard
                key={item.id}
                speaker={item.speaker}
                category={item.category}
                name={item.name}
                time={item.time}
                hasRegistration={item.hasRegistration}
                isPaid={item.isPaid}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-700/50 p-6">
          <ul className="flex w-full flex-col divide-y divide-gray-600/80">
            {kontejnery.map((item) => (
              <ProgramCard
                key={item.id}
                speaker={item.speaker}
                category={item.category}
                name={item.name}
                time={item.time}
                hasRegistration={item.hasRegistration}
                isPaid={item.isPaid}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
