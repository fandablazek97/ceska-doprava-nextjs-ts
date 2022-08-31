import Accordion from "@components/Accordion";
import AccordionStack from "@components/AccordionStack";
import SlideUp from "@components/scroll-reveal/SlideUp";

const qa1 = [
  {
    id: 1,
    question: "Jaké je vstupné?",
    answer:
      "Vstupné na festival je zdarma. Některé workshopy mohou být zpoplatněné, jejich cenu a odkaz na zakoupení vstupenky najdete přímo v programu.s",
  },
  {
    id: 2,
    question: "Je nutné se na přednášky a workshopy registrovat?",
    answer:
      "Přednášky jsou volně přístupné. U workshopů registrace nutná je. Jejich kapacita je omezena tak, aby se vám lektor mohl věnovat individuálně. Pokud se chcete workshopu zúčastnit, registrujte se.",
  },
  {
    id: 3,
    question: "Kdy budete zveřejňovat program?",
    answer:
      "Program s otevřenými registracemi na workshopy odtajníme cca 3 týdny před začátkem festivalu.",
  },
  {
    id: 4,
    question: "Kdy a kde bude Foto Fest probíhat?",
    answer:
      "1. října 2022 od 10 hodin v hlavní části DEPO2015. Vstup u kavárny.",
  },
  {
    id: 5,
    question: "Bude na místě možnost občerstvení?",
    answer: "Ano, jídlo a pití si můžete zakoupit přímo v prostorách kavárny.",
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
