import {configureStore} from "@reduxjs/toolkit";
import pairsReducer from "./store/pairs.tsx";

const store = configureStore({
    reducer: {
        pairsReducer: pairsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;