import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="container">
      <Header heading="Sign Up" />
      <form>
        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          value={email}
          onTextChange={setEmail}
        />
        <Input
          label="First Name"
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onTextChange={setFirstName}
        />
        <Input
          label="Last Name"
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onTextChange={setLastName}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onTextChange={setPassword}
        />
        <Button value="Sign Up" className="btn btn-block" />
      </form>
      <Footer path="/" text="Login" />
    </div>
  );
};

export default SignUp;
