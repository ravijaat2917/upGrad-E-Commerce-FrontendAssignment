import Home from "./Components/HomeComponents/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Signin from "./Components/LoginComponents/Signin";
import Signup from "./Components/SignupComponents/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
