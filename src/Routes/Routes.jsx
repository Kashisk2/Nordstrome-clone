import { Route, Routes } from "react-router-dom";
import { FinalProduct } from "../Components/FinalProduct";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Login/Register";
import { Payment } from "../Components/Payment";
import ProductDetails from "../Components/ProductDetails";
import { CartBag } from "../Pages/Cart/CartBag";
import { CartLater } from "../Pages/Cart/CartLater";
import { Cartpage } from "../Pages/Cart/Cartpage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import { Product } from "../Pages/Product";
import RegisterPage from "../Pages/RegisterPage";

export default function RoutesAll(){
    return (
        <Routes>
            


        <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/ProductPage" element={<FinalProduct />}/>
            <Route path="/ProductPage/:id" element={<ProductDetails/>}/>

            <Route path="/cartpage" element={<Cartpage />}></Route>
            <Route path="/paymentpage" element={<Payment />}></Route>
            {/* <Route path="/cartbag" element={<CartBag />}></Route>
            <Route path="/cartlater" element={<CartLater />}></Route> */}
            
        </Routes>
    )
}