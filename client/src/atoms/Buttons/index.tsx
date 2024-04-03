import { ClipLoader } from "react-spinners";

interface IButtonProps {
  type?: "submit" | "reset" | "button";
  text: string;
  variant: "filled" | "transparent" | "outlined" | "light";
  css?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  type,
  text,
  variant,
  css,
  onClick,
  disabled,
  isLoading,
  leftIcon,
  rightIcon,
}: IButtonProps) => {
  return (
    <button
      className={`group flex h-[45px] w-full items-center justify-center rounded-lg border font-clash-med ${
        variant === "filled" &&
        "border-none bg-gradient-to-r from-astronaut to-blueViolet text-white hover:opacity-80"
      } ${variant === "transparent" && "bg-tansparent border-none text-white hover:bg-bgGray"} ${
        variant === "outlined" &&
        "border border-borderLine text-black hover:border-primary"
      } ${
        variant === "light" &&
        "border-none bg-astronaut/50 text-white/50 hover:bg-astronaut hover:text-white"
      } transition-all duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 ${css}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <ClipLoader
          color={"#ffffff"}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          {leftIcon}
          <p className={`${leftIcon && "ml-2"} ${rightIcon && "mr-2"}`}>
            {text}
          </p>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
