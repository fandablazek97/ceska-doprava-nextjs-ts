import Heading from "@components/Heading";
import Wrapper from "@components/Wrapper";

export default function Hero() {
  return (
    <Wrapper
      as="header"
      paddedContent="lg"
      className="flex items-center justify-start"
    >
      {/* Content */}
      <div className="flex flex-col pt-10">
        <span className="mb-5 block text-xl font-semibold tracking-wider text-muted">
          Lorem ipsum dolor
        </span>
        <Heading level={1} size="2xl" className="mb-12">
          Lorem ipsum dolor sit amet
        </Heading>
        <p className="max-w-prose text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea explicabo
          sint repellat dolorum eos officiis qui beatae totam, ipsum obcaecati!
        </p>
      </div>
    </Wrapper>
  );
}
