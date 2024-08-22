import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserType} from "../../types/UserType.ts";

type UserState = {
    data: UserType

};

const initialState: UserState = {
    data: {
        id: 0,
        fullName: '',
        email: '',
        password: '',
        role: '',
    },

};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.data = action.payload;
        },
        logOut: (state) => {
            state.data = {
                id: 0,
                fullName: '',
                email: '',
                password: '',
                role: '',
            }
        }
    },
});

export const {
    setUser,
    logOut
} = userSlice.actions;
export const userReducer = userSlice.reducer;
