import { cn } from "@/lib/utils";
import { MdArrowOutward } from "react-icons/md";

interface ITypographyProps {
  text: string;
  css?: string;
}

export const Title = ({ text, css }: ITypographyProps) => {
  return (
    <h2
      className={`font-poppins font-bold text-5xl lg:text-6xl text-white ${css}`}
    >
      {text}
    </h2>
  );
};

export const SubTitle = ({ text, css }: ITypographyProps) => {
  return (
    <h2 className={`font-clash-bold text-lg md:text-xl text-white ${css}`}>
      {text}
    </h2>
  );
};

export const SubTitleVariant = ({ text, css }: ITypographyProps) => {
  return (
    <p className={`font-clash-reg text-sm md:text-2xl text-white ${css}`}>
      {text}
    </p>
  );
};


export const Paragraph = ({ text, css }: ITypographyProps) => {
  return (
    <p className={`font-clash-reg text-xs md:text-sm text-white ${css}`}>
      {text}
    </p>
  );
};

interface ITagProps {
  tag: TProjectTag;
}


export const ProjectTag = ({ tag }: ITagProps) => {
  return (
    <p
      className={`p-1 px-2 text-sm rounded ${tag === "Live" ? "bg-green" : tag === "Upcoming" ? "bg-blueViolet" : "bg-error"}`}
    >
      {tag}
    </p>
  );
};

interface ITierProps {
  tag : TierTag
}
export const TierTag = ({ tag }: ITierProps) => {
  return (
    <p
      className={`p-1 px-2 w-fit font-clash-reg text-xl rounded ${tag === "Tier 1" ? "bg-[#393C19] text-[#D0F538]" : tag === "Tier 2" ? "bg-[#19253C] text-[#3857F5]" : tag === "Tier 3" ? "bg-[#1A193C] text-[#4B47E3]" : "bg-error"}`}
    >
      {tag}
    </p>
  );
};

interface ISocials {
  website : string
  twitter : string
  discord? : string
  docs : string
  tokenomics? : string
}
export const Socials = ({ website, twitter, discord, docs, tokenomics} : ISocials) => {
  return (
    <div className="flex gap-2 font-clash-med text-[#717171]">
      <a href={website} className="flex items-center gap-1">website <MdArrowOutward /></a>
      <a href={twitter} className="flex items-center gap-1">twitter <MdArrowOutward /></a>
      <a href={docs} className="flex items-center gap-1">docs <MdArrowOutward /></a>
      {tokenomics && <a href={tokenomics} className="flex items-center gap-1">tokenomics <MdArrowOutward /></a>}
      {discord && <a href={discord} className="flex items-center gap-1">discord <MdArrowOutward /></a>}
    </div>
  )
}