import {SIGNIN_ROUTE, SIGNUP_ROUTE, MAIN_ROUTE} from "./const/routes";
import {Auth, Home} from "../pages";


export const authRoutes = [
    {
        path:MAIN_ROUTE,
        Component: Home
    }
]

export const publicRoutes = [
    {
        path: SIGNUP_ROUTE,
        Component: Auth
    },
    {
        path:SIGNIN_ROUTE,
        Component : Auth
    }
]