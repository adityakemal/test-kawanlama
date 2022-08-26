// import { createSlice } from "@reduxjs/toolkit";
// import { getPokemon } from "./bag.api";

// let initialState = {
//     pokemonData: [],
// };

// export const quizSlice = createSlice({
//     name: "bag",
//     initialState,
//     reducers: {
//         // getHandleNext: (state, { payload }) => {
//         //     state.quizActive = state.quizActive + 1
//         // },
//     },
//     extraReducers: {
//         [getPokemon.pending]: (state, action) => {
//             state.loading = true;
//         },
//         [getPokemon.fulfilled]: (state, { payload }) => {
//             state.loading = false;
//             state.listArticle = payload?.data;
//         },
//         [getPokemon.rejected]: (state, action) => {
//             state.loading = false;
//         },
//     }
// });

// // Action creators are generated for each case reducer function
// // export const { getHandleNext, getHandleBack, getHandleAnswer } = quizSlice.actions;

// export default quizSlice.reducer;
