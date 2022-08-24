import { Heading } from "@/components/heading";
import ProgramCard from "./ProgramCard";
import { atelier, klempirna, kontejnery, nadvori } from "./programData";

type Props = {
  className?: string;
};

export default function ProgramDesktop({ className = "" }: Props) {
  return (
    <div
      className={`hidden lg:flex lg:flex-col lg:gap-6 xl:gap-10 ${className}`}
    >
      {/* Nadpisy */}
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col gap-3 text-left">
          <Heading level={3} size="lg" font="display" color="primary">
            Ateliér
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading level={3} size="lg" font="display" color="primary">
            Klempírna
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading level={3} size="lg" font="display" color="primary">
            Nádvoří
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading level={3} size="lg" font="display" color="primary">
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
