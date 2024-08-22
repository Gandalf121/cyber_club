import { Navigate } from "react-router-dom";
 import {ReactNode} from "react";
import {useAppSelector} from "../redux/hooks.ts";

type AuthProtectedRouteProps={
    children : ReactNode;
}

export default function AuthProtectedRoute({ children }: AuthProtectedRouteProps) {
    const {role} =  useAppSelector((state) => state.user.data);
    return role !== '' ? children : <Navigate to='/login' />
}
