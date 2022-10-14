import { Route, Routes } from "react-router-dom";
import { FinalProduct } from "../Components/FinalProduct";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Login/Register";
import HomePage from "../Pages/HomePage";

export default function RoutesAll(){
    return (
        <Routes>
            


        <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/ProductPage" element={<FinalProduct />}/>
        </Routes>
    )
}