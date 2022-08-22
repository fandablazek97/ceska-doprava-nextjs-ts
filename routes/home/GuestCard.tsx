import { Heading } from "@/components/heading";
import Image from "next/future/image";

type Props = {
  src?: string;
  alt?: string;
  name?: string;
  caption?: string;
};

export default function GuestCard({
  src = "/images/conf.jpg",
  alt = "lorem ipsum",
  name = "Jméno a příjmení",
  caption = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}: Props) {
  return (
    <div className="col-span-1 flex flex-col gap-4">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="aspect-square object-cover"
      />
      <Heading size="sm" level={3}>
        {name}
      </Heading>
      <p className="text-sm">{caption}.</p>
    </div>
  );
}
