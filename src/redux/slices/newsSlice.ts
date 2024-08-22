import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NewsCardProps} from "../../types/NewsCardProps.ts";

type NewsState = {
    allNews:  NewsCardProps[]
};

const initialState: NewsState = {
    allNews: []
};


export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<NewsCardProps[]>) => {
            state.allNews = action.payload;
        },
    },
});

export const {
    setNews
} = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
