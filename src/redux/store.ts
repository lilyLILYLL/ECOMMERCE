import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer,
    },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDisptch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
