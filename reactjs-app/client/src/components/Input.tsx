import { FC } from "react";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: any;
}

const InputField: FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  register,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="border rounded-lg w-full p-2 mt-1 focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default InputField;
