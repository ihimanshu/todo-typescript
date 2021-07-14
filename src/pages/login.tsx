import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <Header heading="Login" />
      <form>
        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          value={email}
          onTextChange={setEmail}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onTextChange={setPassword}
        />
      </form>
      <Footer path="/sign-up" text="Sign Up" />
    </div>
  );
};

export default Login;
