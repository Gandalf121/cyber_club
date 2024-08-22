import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from './slices/userSlice'
import {reservationReducer} from "./slices/reservationSlice.ts";
import {newsReducer} from "./slices/newsSlice.ts";

export const store = configureStore({
    reducer: {
        user : userReducer,
        reservation:reservationReducer,
        news:newsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
