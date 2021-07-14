import React from "react";

interface Props {
  heading: string;
}

const Header: React.FC<Props> = ({ heading }) => {
  return <header className="header">{heading}</header>;
};

export default Header;
