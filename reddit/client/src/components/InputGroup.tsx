import classNames from "classnames";
import { Dispatch } from "react";
import { SetStateAction } from "react";
const defaultInputStyles = (error) =>
  classNames(
    "w-full px-3 py-2 mb-2 transition duration-500 border-2 border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white",
    { "border-red-500": error }
  );

interface InputGroupProps {
  value: string;
  className?: string;
  type: string;
  placeholder: string;
  error: string | undefined;
  setValue: Dispatch<SetStateAction<string>>;
}

const InputGroup: React.FC<InputGroupProps> = ({
  value,
  className,
  type,
  placeholder,
  error,
  setValue,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        className={defaultInputStyles(error)}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <small className="font-medium text-red-600">{error}</small>
    </div>
  );
};

export default InputGroup;
