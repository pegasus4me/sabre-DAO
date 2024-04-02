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
