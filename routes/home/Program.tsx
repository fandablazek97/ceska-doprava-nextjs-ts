import { Heading } from "@/components/heading";
import { Tab } from "@headlessui/react";
import ProgramCard from "./ProgramCard";
import { atelier, klempirna, kontejnery, nadvori } from "./programData";

type Props = {
  className?: string;
};

export default function Program({ className = "" }: Props) {
  return (
    <Tab.Group
      as="div"
      className={`overflow-visible sm:flex sm:gap-5 md:gap-10 lg:hidden ${className}`}
    >
      <Tab.List
        className={
          "flex w-auto gap-5 overflow-x-auto px-1 py-4 sm:w-full sm:flex-1 sm:shrink-0 sm:flex-col sm:gap-10 sm:p-0"
        }
      >
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:w-full"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:w-full"
          }
        >
          <Heading level={3} size="lg" font="display" color="primary">
            Ateliér
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:w-full"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:w-full"
          }
        >
          <Heading level={3} size="lg" font="display" color="primary">
            Klempírna
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:w-full"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:w-full"
          }
        >
          <Heading level={3} size="lg" font="display" color="primary">
            Nádvoří
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:w-full"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:w-full"
          }
        >
          <Heading level={3} size="lg" font="display" color="primary">
            Kontejnery
          </Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </p>
        </Tab>
      </Tab.List>
      <Tab.Panels className={"py-10 sm:w-full sm:flex-1 sm:py-0 sm:px-5"}>
        <Tab.Panel className={"w-full bg-gray-700/50 p-6"}>
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
        </Tab.Panel>
        <Tab.Panel className={"w-full bg-gray-700/50 p-6"}>
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
        </Tab.Panel>
        <Tab.Panel className={"w-full bg-gray-700/50 p-6"}>
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
        </Tab.Panel>
        <Tab.Panel className={"w-full bg-gray-700/50 p-6"}>
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
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}