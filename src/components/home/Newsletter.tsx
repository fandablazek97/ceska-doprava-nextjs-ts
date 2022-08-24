import Heading from "@components/Heading";

export default function Newsletter() {
  return (
    <div className="flex w-full flex-col bg-primary py-32 px-11">
      <Heading level={2} size="lg" font="display" className="uppercase">
        Odebírej novinky, ať ti nic neuteče!
      </Heading>
      <p className="mt-6 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas
        quisquam voluptate et sequi vitae neque corrupti, accusantium ipsum
        minima beatae, debitis soluta in voluptatibus pariatur perferendis.
        Sint, nobis asperiores.
      </p>
    </div>
  );
}
