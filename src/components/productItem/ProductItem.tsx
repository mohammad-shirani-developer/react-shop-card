import type { Products } from "../../types/server";

type ProductItem = Products;

const ProductItem = ({ description, title, price, image }: ProductItem) => {
  return (
    <div className="shadow border rounded pb-4">
      <img className="rounded-t" src={image} alt="" />
      <div className="flex justify-between  px-4 mt-2">
        <h3 className="line-clamp-1 font-bold w-52">{title}</h3>
        <span className="font-bold">{price}$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-left text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
