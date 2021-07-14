import React from "react";

interface Props {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onTextChange: (text: string) => void;
}

const Input: React.FC<Props> = ({
  label,
  type,
  value,
  placeholder,
  onTextChange,
}) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
