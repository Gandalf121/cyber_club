import { Navigate } from "react-router-dom";
import {ReactNode} from "react";
import {useAppSelector} from "../redux/hooks.ts";

type AuthProtectedRouteProps={
    children : ReactNode;
}

export default function AuthProtectedRoute({ children }: AuthProtectedRouteProps) {
    const user =  useAppSelector((state) => state.user);
    // return user.data.accessToken !== '' ? children : <Navigate to='/login' />
    return children
}
