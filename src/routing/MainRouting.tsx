import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import UnauthRoute from "./UnauthRoute.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import AuthProtectedRoute from "./AuthProtectedRoute.tsx";
import {Header} from "../components/Header/Header.tsx";


export function MainRouting() {
    return (
       <BrowserRouter>
           <Routes>
               <Route
                   path="/"
                   element={
                       <AuthProtectedRoute><Header/></AuthProtectedRoute>}>
                   <Route path="main">
                       <Route index  element={<MainPage/>}/>
                   </Route>
               </Route>
               <Route path="/login" element={<UnauthRoute><LoginPage/></UnauthRoute>}></Route>
               <Route path="*" element={<NotFoundPage/>}></Route>
           </Routes>
       </BrowserRouter>
    );
}
