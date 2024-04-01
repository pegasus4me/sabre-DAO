interface IGeneralInputProps {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  error?: string;
  value?: string | number;
  css?: string;
  note?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
}

interface IInputProps extends IGeneralInputProps {
  type?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}
