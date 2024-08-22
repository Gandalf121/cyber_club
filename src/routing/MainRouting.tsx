import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import {LoginPage} from "../pages/LoginPage";
import {MainPage} from "../pages/MainPage";
import AuthProtectedRoute from "./AuthProtectedRoute";
import MainLayout from "../layouts/MainLayout.tsx";
import {News} from "../pages/News.tsx";
import {PersonalAccount} from "../pages/PersonalAccount.tsx";
import {Info} from "../pages/Info.tsx";
import {NewsItem} from "../components/newsItem/NewsItem.tsx";


export function MainRouting() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index  element={<MainPage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="news/:id" element={<NewsItem/>}/>
                    <Route path="info" element={<Info/>}/>
                    <Route path="personalAccount" element={<AuthProtectedRoute><PersonalAccount/></AuthProtectedRoute>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
