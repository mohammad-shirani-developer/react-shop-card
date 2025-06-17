import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api-client";
import type { Products } from "../../types/server";

const Store = () => {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدیدترین محصولات</h1>
        <div className="grid grid-cols-4 gap-4 mt4">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Store;
