import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProfileLayout from "../Layout/ProfileLayout";
import Blog from "../pages/Blog/Blog";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import Contact from "../pages/Contact/Contact";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products/:productId',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.productId}`)
            },
            {
                path: '/profile',
                element: <ProfileLayout></ProfileLayout>,
                children: [
                    {
                        path: '/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path:"/profile/edit",
                        element: <EditProfile/>
                    },
                    {
                        path:"/profile/blog",
                        element: <Blog></Blog>
                    },
                    {
                        path:"/profile/contact",
                        element: <Contact></Contact>
                    }
                ]
            }
        ]
    }
])

export default Router;