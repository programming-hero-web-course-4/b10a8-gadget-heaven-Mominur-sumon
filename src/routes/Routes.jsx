
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AllProducts from "../components/AllProducts";
import Details from "../components/Details";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/products.json'),
                children: [
                    {
                        path: "/",
                        element: <AllProducts></AllProducts>,
                        loader: () => fetch('/products.json')

                    },
                    {
                        path: "/products/:category",
                        element: <AllProducts></AllProducts>,
                        loader: () => fetch('/products.json'),
        
                    },

                ]

            },
            {
                path: "products/details/:id",
                element: <Details></Details>,
                loader: () => fetch('/products.json'),
            },
        ]
    }
]);

export default router;