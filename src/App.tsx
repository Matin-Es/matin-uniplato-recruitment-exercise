import Navbar from "./components/Navbar/Navbar";
import "./global.css";
import Layout from "./Layout/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <div className="App">
        <Layout />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
