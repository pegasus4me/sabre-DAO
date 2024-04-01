interface ITypographyProps {
  text: string;
  css?: string;
}

export const Title = ({ text, css }: ITypographyProps) => {
  return (
    <h2 className={`font-clash-bold text-6xl text-white ${css}`}>
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
