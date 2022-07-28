import { Routes as Router, Route } from "react-router-dom"
import { Shop } from "../pages/Shop"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"
import { ProductDescription } from "../pages/ProductDescription"
import { Cart } from "../pages/Cart/index"


export const Routes = () => (
    <Router>
        <Route path="/" element={<Shop/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path = "/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<ProductDescription/>} />
    </Router>
)