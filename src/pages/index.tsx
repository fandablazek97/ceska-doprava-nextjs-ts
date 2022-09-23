import Button from "@components/Button";
import Heading from "@components/Heading";
import Aftermovie from "@components/home/Aftermovie";
import Hero from "@components/home/Hero";
import NearestDeparturesCard from "@components/home/NearestDeparturesCard";
import ParallaxZajezdy from "@components/home/ParallaxZajezdy";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";

// Nejbližší odjezdy data
export const odjezdy = [
  {
    id: 1,
    tripId: 576,
    imageSrc: "/images/conf.jpg",
    imageAlt: "Heyyyy",
    country: "Chorvatsko",
    name: "Baška",
    dateFrom: "22.7.2022",
    dateTo: "28.7.2022",
  },
  {
    id: 2,
    tripId: 576,
    imageSrc: "/images/conf.jpg",
    imageAlt: "Heyyyy",
    country: "Chorvatsko",
    name: "Baška",
    dateFrom: "22.7.2022",
    dateTo: "28.7.2022",
  },
  {
    id: 3,
    tripId: 576,
    imageSrc: "/images/conf.jpg",
    imageAlt: "Heyyyy",
    country: "Chorvatsko",
    name: "Baška",
    dateFrom: "22.7.2022",
    dateTo: "28.7.2022",
  },
  {
    id: 4,
    tripId: 576,
    imageSrc: "/images/conf.jpg",
    imageAlt: "Heyyyy",
    country: "Chorvatsko",
    name: "Baška",
    dateFrom: "22.7.2022",
    dateTo: "28.7.2022",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Česká doprava" description="" />
      <Hero />

      {/* Nejbližší odjezdy */}
      <Wrapper size="base" className="pb-28 md:pb-36">
        <Heading level={2} size="sm" className="mb-12">
          Nejbližší odjezdy
        </Heading>
        <div className="grid grid-cols-1 gap-10 xs:grid-cols-2 lg:grid-cols-4">
          {odjezdy.map((odjezd) => (
            <NearestDeparturesCard
              tripId={odjezd.tripId}
              key={odjezd.id}
              imageSrc={odjezd.imageSrc}
              imageAlt={odjezd.imageAlt}
              country={odjezd.country}
              name={odjezd.name}
              dateFrom={odjezd.dateFrom}
              dateTo={odjezd.dateTo}
              className="col-span-1"
            />
          ))}
        </div>
      </Wrapper>

      {/* Aftermovie */}
      <Wrapper as={"section"} id="aftermovie" size="lg" paddedContent="none">
        <Aftermovie />
      </Wrapper>

      {/* Zájezdy */}
      <Wrapper
        as={"section"}
        size="base"
        paddedContent="base"
        className="space-y-10"
      >
        <Heading level={2} size="xl" className="max-w-4xl">
          Pojeďte s námi na dovolenou po celé ČR i do zahraničí
        </Heading>
        <p className="max-w-prose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          consequuntur dignissimos voluptatibus quos facilis architecto iure
          eaque nobis voluptas natus fugit nulla aperiam eius ducimus, excepturi
          sunt reprehenderit ea odio.
        </p>
        <Button>Zobrazit zájezdy</Button>
      </Wrapper>

      {/* Zájezdy Parallax */}
      <Wrapper size="fluid" paddedContent="base">
        <ParallaxZajezdy />
      </Wrapper>
    </>
  );
};

export default Home;
