import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
// import Home from "./components/Home";
// import About from "./components/About";
// import   
//  Contact from "./components/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
    //   {
    //     path: "/about",   

    //     element: lazy(() => import("./components/About")),
    //   },
    //   {
    //     path: "/contact",
    //     element: lazy(() => import("./components/Contact")),
    //   },
]);

export default router;