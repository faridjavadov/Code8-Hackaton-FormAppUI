import { createStore } from "redux";
import {configureStore, } from "@reduxjs/toolkit";
import StatusSlice from "../slicers/StatusSlice";
import UserSlice from "../slicers/UserSlice";
import AppealSlice from "../slicers/AppealSlice";

export const store = configureStore({
    reducer:{
        StatusSlice:StatusSlice,
        UserSlice:UserSlice,
        AppealSlice:AppealSlice
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>