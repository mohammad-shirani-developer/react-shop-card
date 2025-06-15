import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Product from "./pages/product/Product";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;
