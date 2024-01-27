// routes 
import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "./Components/LoginSignup/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/LoginSignup/Signup";
import HomePage from "./Screens/HomePage";
import ErrorPage from "./Components/error-page";
import { Navigate } from "react-router-dom";
import { useAuth } from "./utils/auth";

export const RequireAuth = ({ children }) => {
    const { authenticated } = useAuth();
    if (!authenticated) {
        return <Navigate to="/login" />;
    }
    return children;
};


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Signup/>,
    },
    {
        path: "/dashboard",
        element: <RequireAuth><HomePage /></RequireAuth>,
    }

]);

export default router;