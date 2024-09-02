import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'

import SignUp from '../pages/SignUp'

import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProduct from '../pages/AllProduct'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import Payment from '../pages/Payment'



const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            // {
            //     path : "forgot-password",
            //     element : <ForgotPassowrd/>
            // },
            {
                path : "sign-up",
                element : <SignUp/>
            },
             {
                 path : "product-category",
                 element : <CategoryProduct/>
             },
            {
                path : "product/:id",
                 element : <ProductDetails/>
             },
             {
                 path : 'cart',
                 element : <Cart/>,
                 
             },
             {
                 path : "search",
                 element : <SearchProduct/>
             },
             {
                path:"pay",
                element:<Payment/>
             },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                {
                    path:"all-users",
                    element:<AllUsers/>

                },
                {
                    path:"all-product",
                    element:<AllProduct/>

                }
                  
                ]
            },
        ]
    }
])


export default router