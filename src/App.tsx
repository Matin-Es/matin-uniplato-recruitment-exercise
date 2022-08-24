import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./global.css";

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
