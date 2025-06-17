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
  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, handelIncreaseProductQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
