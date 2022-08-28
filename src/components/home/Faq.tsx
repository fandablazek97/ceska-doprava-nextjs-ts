import Accordion from "@components/Accordion";
import AccordionStack from "@components/AccordionStack";
import SlideUp from "@components/scroll-reveal/SlideUp";

const qa1 = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
];

const qa2 = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet de la quera?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum possimus suscipit id? Officiis deleniti impedit dicta magni, tempore sed accusamus. Numquam alias necessitatibus vitae!",
  },
];

export default function Faq() {
  return (
    <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-2 md:pt-28">
      <AccordionStack className="col-span-1">
        {qa1.map((qa) => (
          <SlideUp key={qa.id}>
            <Accordion title={qa.question}>
              <p>{qa.answer}</p>
            </Accordion>
          </SlideUp>
        ))}
      </AccordionStack>
      <AccordionStack className="col-span-1">
        {qa2.map((qa) => (
          <SlideUp key={qa.id}>
            <Accordion title={qa.question}>
              <p>{qa.answer}</p>
            </Accordion>
          </SlideUp>
        ))}
      </AccordionStack>
    </div>
  );
}
