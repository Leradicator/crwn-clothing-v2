import { createContext, useState } from "react";

// as the actual value
export const CartContext = createContext({
    toggle: false,
    setToggle: () => {}
});

export const CartProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const value = { toggle, setToggle };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
