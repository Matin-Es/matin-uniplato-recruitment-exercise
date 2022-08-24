import Navbar from "./components/Navbar/Navbar";
import "./global.css";
import Layout from "./Layout/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="root">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
