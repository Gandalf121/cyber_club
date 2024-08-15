import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {UserType} from "../../types/UserType.tsx";

type UserState = {
    data : UserType

};

const initialState: UserState = {
    data:{
        name : '',
        email : '',
        phone : '',
        accessToken : '',
    },

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<UserType>) => {
          state.data = action.payload;
      }
    },
});

export const {

} = userSlice.actions;
export const userReducer = userSlice.reducer;
