import { Route, Routes } from "react-router-dom";
import { FinalProduct } from "../Components/FinalProduct";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Login/Register";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

export default function RoutesAll(){
    return (
        <Routes>
            


        <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/ProductPage" element={<FinalProduct />}/>
        </Routes>
    )
}