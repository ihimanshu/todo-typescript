import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import Tasks from "./pages/tasks";
import SignUp from "./pages/sign-up";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/tasks" component={Tasks} />
    </Router>
  );
};

export default App;
