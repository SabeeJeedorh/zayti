"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("zayti-cart");

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      localStorage.removeItem("zayti-cart");
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("zayti-cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = useCallback((product) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.slug === product.slug
      );

      if (existing) {
        return currentCart.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((slug) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.slug !== slug)
    );
  }, []);

  const updateQuantity = useCallback((slug, quantity) => {
    if (quantity < 1) {
      setCart((currentCart) =>
        currentCart.filter((item) => item.slug !== slug)
      );
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.slug === slug ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}