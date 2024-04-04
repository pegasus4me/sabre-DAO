import { Button, Paragraph, ProjectTag, TierTag } from "@/atoms";

export interface Ivault  {
  logo: string;
  category: string;
  name: string;
  description: string;
  price: string;
  round: string;
  maxCap: string;
  tag: any;
  tier : any;
  viewMore: () => Promise<void>;
};

export default function Svault({
  logo,
  category,
  name,
  tier,
  description,
  price,
  round,
  maxCap,
  tag,
  viewMore,
}: Ivault): JSX.Element {
  return ( 
    <article className="flex flex-col min-w-[300px] max-w-[460px] rounded-md bg-gradient-to-b from-jacksonPurple/30 to-ebony/30 h-fit rounded-lg border border-borderLine/20 flex flex-col space-y-8 p-4 backdrop-filter backdrop-blur-lg text-white overflow-hidden">
      <section className="flex justify-between p-6">
        <div>
          <div>
            <div className="flex items-center">
              <TierTag tag={tier} />
              </div>
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
          <img src={logo} alt="logo" width={260}/>
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
