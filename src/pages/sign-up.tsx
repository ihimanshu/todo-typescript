import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUp: React.FC = () => {
  return (
    <div>
      <Header heading="Sign Up" />
      <Footer path="/" text="Login" />
    </div>
  );
};

export default SignUp;
