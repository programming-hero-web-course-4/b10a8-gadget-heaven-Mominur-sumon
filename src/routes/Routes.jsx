
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AllProducts from "../components/AllProducts";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "/",
                        element: <AllProducts></AllProducts>,
                        loader: () => fetch('/products.json')
                        
                    },
                    {
                        path: "/:category",
                        element: <AllProducts></AllProducts>,
                        loader: () => fetch('/products.json')
                        
                    },
                ]
            }
        ]
    }
]);

export default router;