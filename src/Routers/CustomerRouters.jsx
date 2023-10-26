import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../customer/components/pages/HomePage/HomePage"
import Cart from "../customer/components/Cart/Cart"
import Navigation from "../customer/components/Navigation/Navigation"
import Footer from "../customer/components/Footer/Footer"
import Product from "../customer/components/Product/Product"
import ProductDetails from "../customer/components/ProductDetails/ProductDetails"
import ChecKout from "../customer/components/Checkout/Checkout"
import Order from "../customer/components/Order/Order"
import OrderDetails from "../customer/components/Order/OrderDetails"

const CustomerRouters =() =>{
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <div>
                <Routes>
                <Route path="/login"element={<HomePage />}> </Route>
                <Route path="/register"element={<HomePage />}> </Route>

                    <Route path="/"element={<HomePage />}> </Route>
                    <Route path="/cart"element={<Cart />}> </Route>
                    <Route path="/:lavelOne/:lavelTwo/:lavelThre"element={<Product/>}></Route>
                    <Route path="/product/:productid"element={<ProductDetails/>}></Route>
                    <Route path="/checkout"element={<ChecKout/>}></Route>
                    <Route path="/account/order"element={<Order/>}></Route>
                    <Route path="/account/order/:orderId"element={<OrderDetails/>}></Route>
                    {/* <Order/> */}
                    {/* <OrderDetails/> */}
                </Routes>
            </div>
            
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default CustomerRouters