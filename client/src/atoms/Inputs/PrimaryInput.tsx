const PrimaryInput: React.FC<IInputProps> = ({
  id,
  name,
  onBlur,
  value,
  placeholder,
  label,
  error,
  type,
  css,
  onChange,
  inputRef,
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${css} font-clash-reg`}>
      {label && (
        <label htmlFor={id} className="text-sm text-white">
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={`h-[45px] text-white rounded-lg border-[1px] border-borderLine/30 bg-transparent pl-4 text-xs outline-none transition-all duration-300 placeholder:text-xs hover:border-borderLine/50 focus:border-borderLine ${
          error ? "border-error bg-errorBg" : ""
        }`}
      />
      {error && (
        <small className="text-xs text-error transition-all duration-300">
          {error}
        </small>
      )}
    </div>
  );
};

export default PrimaryInput;
