// import { useSelector } from "react-redux";
import { ReactNode } from 'react';
import { Navigate } from "react-router-dom";
import {useAppSelector} from "../redux/hooks.ts";


type UnauthRouteProps = {
    children:ReactNode
}

export default function UnauthRoute({ children }: UnauthRouteProps) {
    const user = useAppSelector((state) => state.user);
    return user.data.accessToken === '' ? children : <Navigate to='/' />
}
