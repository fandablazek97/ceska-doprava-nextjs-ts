import Heading from "@components/Heading";
import { Tab } from "@headlessui/react";
import ProgramCard from "./ProgramCard";
import { atelier, klempirna, kontejnery, nadvori } from "./programData";

type Props = {
  className?: string;
};

const stagesTabs = [
  {
    id: 1,
    headline: "Klempírna",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,dolorum.",
  },
  {
    id: 2,
    headline: "Ateliér",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,dolorum.",
  },
  {
    id: 3,
    headline: "Kontejnery",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,dolorum.",
  },
  {
    id: 4,
    headline: "Nádvoří",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,dolorum.",
  },
];

export default function Program({ className = "" }: Props) {
  return (
    <Tab.Group
      as="div"
      className={`overflow-visible sm:flex sm:gap-5 md:gap-10 lg:hidden ${className}`}
    >
      <Tab.List
        className={
          "flex w-auto gap-5 overflow-x-auto px-1 py-4 sm:w-full sm:flex-1 sm:shrink-0 sm:flex-col sm:p-0"
        }
      >
        {stagesTabs.map((stage) => (
          <Tab
            key={stage.id}
            className={({ selected }) =>
              selected
                ? "flex w-40 shrink-0 flex-col items-center justify-center gap-3 bg-gray-700/60 p-5 text-left outline-none transition-colors duration-200 sm:w-full sm:items-start sm:justify-start"
                : "flex w-40 shrink-0 flex-col items-center justify-center gap-3 bg-transparent p-5 text-left outline-none transition-colors duration-200 hover:bg-gray-700/30 sm:w-full sm:items-start sm:justify-start"
            }
          >
            <Heading
              level={3}
              size="lg"
              font="display"
              color="primary"
              weight="medium"
              className="text-center sm:text-left"
            >
              {stage.headline}
            </Heading>
            {/* <p className="text-sm">{stage.caption}</p> */}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className={"py-10 sm:w-full sm:flex-1 sm:py-0 sm:px-5"}>
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
                isFull={item.isFull}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </Tab.Panel>
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
                isFull={item.isFull}
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
                isFull={item.isFull}
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
                isFull={item.isFull}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
