import { Accordion, AccordionStack } from "@/components/accordion";
import { Alert } from "@/components/alert";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/dropdown";
import { Heading } from "@/components/heading/";
import Seo from "@/components/Seo";
import { Text } from "@/components/text";
import { Wrapper } from "@/components/wrapper/";
import type { NextPage } from "next";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  function toggleLoading() {
    setLoading(!loading);
  }
  return (
    <>
      <Seo
        title="Ui framework"
        description="Nextjs ui framework v2 made with typescript"
      />
      {/* Hero section */}
      <Wrapper as="header" className="grid grid-cols-6 gap-10 pt-44">
        <div className="col-span-6 flex flex-col items-start gap-8 md:col-span-4">
          <Heading
            level={1}
            size="none"
            className="text-3xl md:text-5xl xl:text-7xl"
          >
            Reveal ui 2 made with nextjs & typescript
          </Heading>
          <Text size="xl" weight="medium" className="max-w-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, unde aliquid reprehenderit sed sapiente dolorem,
            voluptatem assumenda unde laudantium.
          </Text>
          <Button as="a" href="#about" rightIcon={<HiArrowRight />}>
            Learn more
          </Button>
        </div>
        <div className="col-span-2 hidden bg-primary/5 md:block"></div>
      </Wrapper>

      <Wrapper size="lg" className="my-40">
        <div className="my-16 flex flex-row flex-wrap items-start gap-8">
          <Button size="xs">Button xs</Button>
          <Button size="sm">Button sm</Button>
          <Button size="base">Button base</Button>
          <Button size="lg">Button lg</Button>
          <Button size="xl">Button xl</Button>
        </div>
        <div className="my-16 flex flex-row flex-wrap gap-8">
          <Button onClick={toggleLoading} isLoading={loading}>
            Filled
          </Button>
          <Button color="secondary">Filled</Button>
          <Button color="tertiary">Filled</Button>
          <Button color="success">Filled</Button>
          <Button color="error">Filled</Button>
          <Button color="warning">Filled</Button>
          <Button color="info">Filled</Button>
          <Button color="light">Filled</Button>
          <Button color="dark">Filled</Button>
          <Button color="muted">Filled</Button>
          <Button color="rich">Filled</Button>
        </div>
        <div className="my-16 flex flex-row flex-wrap gap-8">
          <Button onClick={toggleLoading} isLoading={loading} type="tinted">
            Tinted
          </Button>
          <Button type="tinted" color="secondary">
            Tinted
          </Button>
          <Button type="tinted" color="tertiary">
            Tinted
          </Button>
          <Button type="tinted" color="success">
            Tinted
          </Button>
          <Button type="tinted" color="error">
            Tinted
          </Button>
          <Button type="tinted" color="warning">
            Tinted
          </Button>
          <Button type="tinted" color="info">
            Tinted
          </Button>
          <Button type="tinted" color="light">
            Tinted
          </Button>
          <Button type="tinted" color="dark">
            Tinted
          </Button>
          <Button type="tinted" color="muted">
            Tinted
          </Button>
          <Button type="tinted" color="rich">
            Tinted
          </Button>
        </div>
        <div className="my-16 flex flex-row flex-wrap gap-8">
          <Button onClick={toggleLoading} isLoading={loading} type="outlined">
            Outlined
          </Button>
          <Button type="outlined" color="secondary">
            Outlined
          </Button>
          <Button type="outlined" color="tertiary">
            Outlined
          </Button>
          <Button type="outlined" color="success">
            Outlined
          </Button>
          <Button type="outlined" color="error">
            Outlined
          </Button>
          <Button type="outlined" color="warning">
            Outlined
          </Button>
          <Button type="outlined" color="info">
            Outlined
          </Button>
          <Button type="outlined" color="light">
            Outlined
          </Button>
          <Button type="outlined" color="dark">
            Outlined
          </Button>
          <Button type="outlined" color="muted">
            Outlined
          </Button>
          <Button type="outlined" color="rich">
            Outlined
          </Button>
        </div>

        <div className="my-16 flex flex-row flex-wrap gap-8">
          <Button onClick={toggleLoading} isLoading={loading} type="plain">
            Plain
          </Button>
          <Button type="plain" color="secondary">
            Plain
          </Button>
          <Button type="plain" color="tertiary">
            Plain
          </Button>
          <Button type="plain" color="success">
            Plain
          </Button>
          <Button type="plain" color="error">
            Plain
          </Button>
          <Button type="plain" color="warning">
            Plain
          </Button>
          <Button type="plain" color="info">
            Plain
          </Button>
          <Button type="plain" color="light">
            Plain
          </Button>
          <Button type="plain" color="dark">
            Plain
          </Button>
          <Button type="plain" color="muted">
            Plain
          </Button>
          <Button type="plain" color="rich">
            Plain
          </Button>
        </div>

        <div className="my-16 flex flex-row flex-wrap items-start gap-8">
          <Button size="xs" isIconBox={true} shape="pill">
            <FaFacebookF />
          </Button>
          <Button size="sm" isIconBox={true} shape="pill">
            <FaFacebookF />
          </Button>
          <Button isIconBox={true} shape="pill">
            <FaFacebookF />
          </Button>
          <Button size="lg" isIconBox={true} shape="pill">
            <FaFacebookF />
          </Button>
          <Button size="xl" isIconBox={true} shape="pill">
            <FaFacebookF />
          </Button>
        </div>

        <div className="my-16 flex flex-row flex-wrap gap-8">
          <Button shape="pill" isIconBox={true}>
            <FaFacebookF />
          </Button>
          <Button shape="pill" isIconBox={true} type="tinted">
            <FaFacebookF />
          </Button>
          <Button shape="pill" isIconBox={true} type="outlined">
            <FaFacebookF />
          </Button>
          <Button shape="pill" isIconBox={true} type="plain">
            <FaFacebookF />
          </Button>
        </div>

        <div className="my-16 flex flex-row flex-wrap items-start gap-8">
          <Badge size="sm">Badge</Badge>
          <Badge size="lg">Badge</Badge>
          <Badge size="sm" hasDot={true}>
            Badge
          </Badge>
          <Badge size="lg" hasDot={true}>
            Badge
          </Badge>
        </div>
        <div className="my-16 flex flex-row flex-wrap gap-8">
          <Badge>Badge</Badge>
          <Badge type="filled">Badge</Badge>
          <Badge type="outlined">Badge</Badge>
          <Badge color="muted">Badge</Badge>
          <Badge color="muted" type="filled">
            Badge
          </Badge>
          <Badge color="muted" type="outlined">
            Badge
          </Badge>
          <Badge color="rich">Badge</Badge>
          <Badge color="rich" type="filled">
            Badge
          </Badge>
          <Badge color="rich" type="outlined">
            Badge
          </Badge>
        </div>
        <div className="my-16 flex flex-row flex-wrap gap-8">
          <Badge color="primary">Badge</Badge>
          <Badge color="secondary">Badge</Badge>
          <Badge color="tertiary">Badge</Badge>
          <Badge color="success">Badge</Badge>
          <Badge color="error">Badge</Badge>
          <Badge color="warning">Badge</Badge>
          <Badge color="info">Badge</Badge>
          <Badge color="light">Badge</Badge>
          <Badge color="dark">Badge</Badge>
          <Badge color="muted">Badge</Badge>
          <Badge color="rich">Badge</Badge>
        </div>
        <div className="my-16 flex flex-row flex-wrap gap-8">
          <Badge hasDot={true} color="primary">
            Badge
          </Badge>
          <Badge hasDot={true} color="secondary">
            Badge
          </Badge>
          <Badge hasDot={true} color="tertiary">
            Badge
          </Badge>
          <Badge hasDot={true} color="success">
            Badge
          </Badge>
          <Badge hasDot={true} color="error">
            Badge
          </Badge>
          <Badge hasDot={true} color="warning">
            Badge
          </Badge>
          <Badge hasDot={true} color="info">
            Badge
          </Badge>
          <Badge hasDot={true} color="light">
            Badge
          </Badge>
          <Badge hasDot={true} color="dark">
            Badge
          </Badge>
          <Badge hasDot={true} color="muted">
            Badge
          </Badge>
          <Badge hasDot={true} color="rich">
            Badge
          </Badge>
        </div>
      </Wrapper>
      <Wrapper paddedContent="base">
        <Dropdown />
      </Wrapper>
      <Wrapper paddedContent="sm" className="bg-red-500/20">
        <Heading level={1} size="lg">
          Some content padded sm
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit
          repellendus assumenda esse ipsam ab temporibus omnis ex vero dolores.
        </Text>
      </Wrapper>
      <Wrapper paddedContent="base" className="bg-green-500/20">
        <Heading level={1} size="lg">
          Some content padded base
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit
          repellendus assumenda esse ipsam ab temporibus omnis ex vero dolores.
        </Text>
      </Wrapper>
      <Wrapper paddedContent="lg" className="bg-blue-500/20">
        <Heading level={1} size="lg">
          Some content padded lg
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit
          repellendus assumenda esse ipsam ab temporibus omnis ex vero dolores.
        </Text>
      </Wrapper>
      <Wrapper paddedContent="base" className="space-y-10">
        <Alert
          title="This is alert massage"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis cum accusamus dignissimos non laudantium ad a ipsum sint eaque."
          status="success"
          type="tinted"
        />
        <Alert
          title="This is alert massage"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis cum accusamus dignissimos non laudantium ad a ipsum sint eaque."
          status="error"
          type="tinted"
        />
        <Alert
          title="This is alert massage"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis cum accusamus dignissimos non laudantium ad a ipsum sint eaque."
          status="warning"
          type="tinted"
        />
        <Alert
          title="This is alert massage"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis cum accusamus dignissimos non laudantium ad a ipsum sint eaque."
          status="info"
          type="tinted"
        />
        <Alert
          title="This is alert massage"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis cum accusamus dignissimos non laudantium ad a ipsum sint eaque."
          status="success"
          type="filled"
        />
        <Alert
          title="This is alert massage"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis cum accusamus dignissimos non laudantium ad a ipsum sint eaque."
          status="error"
          type="filled"
        />
        <Alert
          title="This is alert massage"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis cum accusamus dignissimos non laudantium ad a ipsum sint eaque."
          status="warning"
          type="filled"
        />
        <Alert
          title="This is alert massage"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis cum accusamus dignissimos non laudantium ad a ipsum sint eaque."
          status="info"
          type="filled"
        />
      </Wrapper>
      <Wrapper size="sm" paddedContent="base">
        <AccordionStack>
          <Accordion title="Lorem ipsum dolor sit amet?" isDefaultOpen={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            natus nisi sit error recusandae exercitationem perspiciatis harum a,
            laudantium dignissimos accusamus architecto reprehenderit odit
            numquam dolorum voluptas omnis, obcaecati dicta voluptate! Nihil
            dolorem eum a, alias porro architecto consequuntur ipsa eveniet
            minus fugit ad recusandae ullam ratione fuga unde sequi.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            natus nisi sit error recusandae exercitationem perspiciatis harum a,
            laudantium dignissimos accusamus architecto reprehenderit odit
            numquam dolorum voluptas omnis, obcaecati dicta voluptate! Nihil
            dolorem eum a, alias porro architecto consequuntur ipsa eveniet
            minus fugit ad recusandae ullam ratione fuga unde sequi.
          </Accordion>
        </AccordionStack>
      </Wrapper>
    </>
  );
};

export default Home;
