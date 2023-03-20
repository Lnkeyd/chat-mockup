import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import messagesReducer from "./messageSlice";

export const store = configureStore({
    reducer: {
        chats: messagesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => RootDispatch = useDispatch