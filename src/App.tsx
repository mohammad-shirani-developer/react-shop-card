import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Layout>
  );
}

export default App;
