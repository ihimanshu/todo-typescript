import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import Tasks from "./pages/tasks";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/tasks" component={Tasks} />
    </Router>
  );
}

export default App;
