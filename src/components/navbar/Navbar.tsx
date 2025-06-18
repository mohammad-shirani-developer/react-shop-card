import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContex } from "../../context/ShoppingCartContext";
import { MdShoppingBasket } from "react-icons/md";

const Navbar = () => {
  const { cartQty } = useShoppingCartContex();
  return (
    <div className="h-14 border-b shadow">
      <Container>
        <div className="flex justify-between flex-row-reverse items-center  h-full">
          <ul className="flex flex-row-reverse">
            <li className="ml-4">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>

          <div>
            <Link className="relative" to="/cart">
              <button>
                {" "}
                <MdShoppingBasket />{" "}
              </button>
              <span className="absolute w-4 h-4 bg-red-600 flex justify-center items-center rounded-full text-white -top-1 -right-3 text-xs">
                {cartQty !== 0 ? cartQty : ""}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
