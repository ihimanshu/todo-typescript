import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  text: string;
}

const Footer: React.FC<Props> = ({ path, text }) => {
  return (
    <footer className="footer">
      <Link to={path}>{text}</Link>
    </footer>
  );
};

export default Footer;
