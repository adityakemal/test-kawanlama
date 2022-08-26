import { createSlice } from "@reduxjs/toolkit";
import { getPokemon } from "./home.api";


let initialState = {
    pokemonData: [],
    bagData: [],
    count: 0,
    loading: false
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        handleRandomizeArray: (state, { payload }) => {
            const randomize = state.pokemonData?.sort((a, b) => { return Math.random() - 0.5; });
            state.pokemonData = randomize
        },
        handleAddToBag: (state, { payload }) => {
            state.bagData = [...state.bagData, payload]
        },
        handleRemoveBag: (state, { payload }) => {
            const filtered = state.bagData?.filter(res => res.name !== payload)
            state.bagData = filtered
        },
    },
    extraReducers: {
        [getPokemon.pending]: (state, action) => {
            state.loading = true;
        },
        [getPokemon.fulfilled]: (state, { payload }) => {
            state.loading = false;
            console.log(payload.count)
            state.pokemonData = payload?.results;
            state.count = payload?.results?.count;
        },
        [getPokemon.rejected]: (state, action) => {
            state.loading = false;
        },
    }
});

// Action creators are generated for each case reducer function
export const { handleRandomizeArray, handleAddToBag, handleRemoveBag } = homeSlice.actions;

export default homeSlice.reducer;
