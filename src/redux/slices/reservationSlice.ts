import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ReservationObject} from "../../types/ReservationType.ts";

type ReservationState = {
    data:  ReservationObject[]
};

const initialState: ReservationState = {
    data: []
};


export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setReservation: (state, action: PayloadAction<ReservationObject[]>) => {
            state.data = action.payload;
        },
    },
});

export const {
    setReservation
} = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;
