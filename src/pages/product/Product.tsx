import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api-client";
import type { Products } from "../../types/server";
import { useShoppingCartContex } from "../../context/ShoppingCartContext";

const Product = () => {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Products>();

  const {
    handelIncreaseProductQty,
    cartItems,
    handelDecreaseProductQty,
    getProductQty,
  } = useShoppingCartContex();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);

  console.log(cartItems);

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
            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                onClick={() =>
                  handelIncreaseProductQty(parseInt(params.id as string))
                }
                variant="primary"
                id="btn"
                className="mt-2 w-full"
              >
                Add to Cart
              </Button>
            ) : (
              <div className="grid grid-cols-3">
                <Button
                  onClick={() =>
                    handelIncreaseProductQty(parseInt(params.id as string))
                  }
                  variant="primary"
                  id="btn"
                  className="mt-2 w-full"
                >
                  +
                </Button>
                <span className="flex justify-center items-center">
                  {" "}
                  {getProductQty(parseInt(params.id as string))}
                </span>

                <Button
                  onClick={() =>
                    handelDecreaseProductQty(parseInt(params.id as string))
                  }
                  variant="danger"
                  id="btn"
                  className="mt-2 w-full "
                >
                  -
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
