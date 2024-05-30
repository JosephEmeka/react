import Home from "../pages/Home";
import Layout from "../components/Layout";

export const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
        children: [

            {
                path: "",
                element: <Home/>,

            },

            {
                path: "/",
                element: <Home/>,

            },

            {
                path: "home",
                element: <Home/>,

            }

        ]

    }
]