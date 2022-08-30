import Heading from "@components/Heading";
import SlideUp from "@components/scroll-reveal/SlideUp";
import Image from "next/future/image";

type Props = {
  src?: string;
  alt?: string;
  name?: string;
  caption?: string;
  className?: string;
};

export default function GuestCard({
  src = "/images/conf.jpg",
  alt = "lorem ipsum",
  name = "Jméno a příjmení",
  caption = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  className = "",
}: Props) {
  return (
    <SlideUp
      as={"div"}
      className={`col-span-1 flex flex-col gap-4 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="aspect-square bg-gray-700 object-cover"
        loading="lazy"
      />
      <Heading size="sm" level={3}>
        {name}
      </Heading>
      <p className="text-sm">{caption}.</p>
    </SlideUp>
  );
}
