
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AllProducts from "../components/AllProducts";
import Details from "../components/Details";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import NotFound from "../pages/NotFound";


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
            {
                path: '/statistics',
                element: <h2>I will Add This Later</h2>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/purchaseHistory',
                element: <History></History>
            }, {

                path: "*",
                element: <NotFound></NotFound>
            }
        ]
    }
]);

export default router;