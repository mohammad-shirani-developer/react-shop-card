import { createContext, useContext, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
}

interface shoppingCartContext {
  cartItems: CartItem[];
  handelIncreaseProductQty: (id: number) => void;
  handelDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handelRemoveProduct: (id: number) => void;
}

export const ShoppingCartContext = createContext({} as shoppingCartContext);

export const useShoppingCartContex = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handelIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let seletedItem = currentItems.find((item) => item.id == id);
      if (seletedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handelDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let seletedItem = currentItems.find((item) => item.id == id);
      if (seletedItem?.qty == 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handelRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handelIncreaseProductQty,
        handelDecreaseProductQty,
        getProductQty,
        handelRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
