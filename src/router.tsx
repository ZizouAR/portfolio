import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />
            }
        ]
    }
];

const router = createBrowserRouter(routes)

export default () => <RouterProvider router={router} />