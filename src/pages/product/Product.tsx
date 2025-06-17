import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api-client";
import type { Products } from "../../types/server";

const Product = () => {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Products>();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className=" col-span-10 p-4">
            <h1 className="text-right">{product?.title}</h1>
            <div>
              <p className="text-right">{product?.price}$</p>
              <p className="text-right">{product?.description}</p>
            </div>
          </div>

          <div className=" col-span-2 p-4 bg-sky-200">
            <img className="rounded" src={product?.image} alt="" />
            <Button variant="primary" id="btn" className="mt-2 w-full !py-3">
              Add to Cart
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
