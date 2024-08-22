import './App.css'
import {MainRouting} from "./routing/MainRouting.tsx";
import axios from 'axios';
import axiosConfig from "./axios/axiosConfig.ts"
import {useEffect} from "react";
import {reservationObject} from "./components/reservation/reservationObject.ts";
import {useAppDispatch, useAppSelector} from "./redux/hooks.ts";
import {setReservation} from "./redux/slices/reservationSlice.ts";
import _ from "lodash"
import {SnackbarProvider} from "notistack";
import {allNews}  from "./components/newsItem/allNews.ts"
import {setNews} from "./redux/slices/newsSlice.ts";

axios.defaults.baseURL = axiosConfig.baseURL;

function App() {
    const dispatch = useAppDispatch()
    const reservation = useAppSelector(selector=>selector.reservation.data)
    const news = useAppSelector(selector=>selector.news.allNews)
    useEffect(() => {
        const storedDataReservation = localStorage.getItem('reservationObject');
        const storedDataNews = localStorage.getItem('newsObject');
        if (!storedDataReservation) {
            dispatch(setReservation(reservationObject));
        }else{
            dispatch(setReservation(JSON.parse(storedDataReservation)));
        }
        if (!storedDataNews) {
            dispatch(setNews(allNews));
        }else{
            dispatch(setNews(JSON.parse(storedDataNews)));
        }
    }, []);

    useEffect(() => {
        if(!_.isEmpty(reservation))
            localStorage.setItem('reservationObject', JSON.stringify(reservation));
    }, [reservation]);

    useEffect(() => {
        if(!_.isEmpty(news))
            localStorage.setItem('newsObject', JSON.stringify(news));
    }, [news]);
    return (
        <>
            <SnackbarProvider>
                <MainRouting/>
            </SnackbarProvider>
        </>
    )
}

export default App
