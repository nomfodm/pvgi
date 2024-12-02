import {Pair} from "../types.tsx";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PairsState {
    retrieved: boolean;
    pairs: Pair[];
    error: string;
}

const initialState: PairsState = {
    retrieved: false,
    pairs: [],
    error: "",
}

export const pairsSlice = createSlice({
    name: "pairs",
    initialState,
    reducers: {
        retrievePairs: (state, action: PayloadAction<Pair[]>) => {
            state.retrieved = true;
            state.pairs = action.payload;
        },
        clear: (state) => {
            state.retrieved = false;
            state.pairs = [];
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = "";
        }
    }
})

export const pairsStateActions = pairsSlice.actions;

const pairsReducer = pairsSlice.reducer;
export default pairsReducer;