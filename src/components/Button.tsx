import React from "react";

interface Props {
  value: string;
  className: string;
}

const Button: React.FC<Props> = ({ value, className }) => {
  return <input type="submit" value={value} className={className} />;
};

export default Button;
