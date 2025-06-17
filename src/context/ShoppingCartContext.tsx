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
}

export const ShoppingCartContext = createContext({} as shoppingCartContext);

export const useShoppingCartContex = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
