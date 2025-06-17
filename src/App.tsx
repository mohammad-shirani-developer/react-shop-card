import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Store from "./pages/store/Store";

function App() {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </ShoppingCartProvider>
  );
}

export default App;
