import { Button, Paragraph, ProjectTag } from "@/atoms";

type TSvault = {
  logo: string;
  category: string;
  name: string;
  description: string;
  price: string;
  round: string;
  maxCap: string;
  viewMore: () => Promise<void>;
};

export default function Svault({
  logo,
  category,
  name,
  description,
  price,
  round,
  maxCap,
  tag,
  viewMore,
}: TSvault): JSX.Element {
  return (
    <article className="flex flex-col min-w-[300px] max-w-[460px] rounded-lg bg-gradient-to-b from-[#26246F] to-[#0C0C1D] text-white overflow-hidden">
      <section className="flex justify-between p-6">
        <div>
          <div>
            <div className="flex space-x-4 items-center">
              <h3 className="text-5xl font-clash-reg mb-0">{name}</h3>
              <ProjectTag tag={tag} />
            </div>
            <Paragraph text={category} />
          </div>
          <Paragraph text={description} />
          <div className="mt-10">
            <Paragraph text={`Round: ${round}`} />
            <Paragraph text={`Price: ${price}`} />
            <Paragraph text={`Svault max cap: ${maxCap}`} />
          </div>
        </div>
        <div className="">
          <img src={logo} alt="logo" />
        </div>
      </section>

      <Button
        css="!rounded-none"
        text={"View More"}
        variant={"filled"}
        onClick={viewMore}
      />
    </article>
  );

}
