import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx"
import Charters from "../pages/Characters.jsx"

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <h1>An error occured</h1>,
        children: [
            { index: true, element: <Home/>},
            {path: "character/:charId", element: <Charters/>},
            {path: "*", element: <h1>404 not found</h1>}
        ]
    }
])

export {router};
