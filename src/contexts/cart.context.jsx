import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => 
        (cartItem.id === productToAdd.id)
    );

    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => (
            (cartItem.id === productToAdd.id)
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        ));
    }
    // return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
}

// as the actual value
export const CartContext = createContext({
    toggle: false,
    setToggle: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = { toggle, setToggle, cartItems, addItemToCart, };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
