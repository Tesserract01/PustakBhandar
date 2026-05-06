import { createContext, useContext, useMemo, useState } from 'react';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (book) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === book.id);
      if (existing) {
        return items.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCartItems((items) => items.filter((item) => item.id !== bookId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (bookId, quantity) => {
    const nextQuantity = Math.max(1, Number(quantity) || 1);
    setCartItems((items) =>
      items.map((item) =>
        item.id === bookId ? { ...item, quantity: nextQuantity } : item
      )
    );
  };

  const toggleWishlist = (book) => {
    setWishlist((items) => {
      if (items.some((item) => item.id === book.id)) {
        return items.filter((item) => item.id !== book.id);
      }
      return [...items, book];
    });
  };

  const isWishlisted = (bookId) => wishlist.some((item) => item.id === bookId);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      cartItems,
      wishlist,
      addToCart,
      removeFromCart,
      clearCart,
      updateQuantity,
      toggleWishlist,
      isWishlisted,
      cartTotal,
      cartCount: cartItems.reduce((total, item) => total + item.quantity, 0)
    }),
    [cartItems, wishlist, cartTotal]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  return useContext(StoreContext);
}
