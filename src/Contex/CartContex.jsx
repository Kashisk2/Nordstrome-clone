import { createContext, useState } from "react";

export const CartContex = createContext()


export const SignUpConetexProvide = ({ children }) => {
   
    const [bagState, setBagState] = useState(false)
   

    return <CartContex.Provider value={{ userLogin, handleLogin, handleMiddle }}>
        {children}
    </CartContex.Provider>
}