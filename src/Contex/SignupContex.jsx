import { createContext, useState } from "react";

export const SignUpContex=createContext()


export const SignUpConetexProvide =({children})=>{
    const [userLogin, setUserLogin] = useState(false)
    const handleLogin=()=>{
        setUserLogin(true)
    }
     const handleMiddle=()=>{
         setUserLogin(false)
   }
    
    return <SignUpContex.Provider value={{ userLogin, handleLogin, handleMiddle }}>
    {children}
</SignUpContex.Provider>
}