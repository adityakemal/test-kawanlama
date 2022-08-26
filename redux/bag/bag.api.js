
// export const getPokemon = createAsyncThunk("get/getPokemon", async (params, { rejectWithValue }) => {
//     try {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
//             // headers: {
//             //     Authorization: localStorage.getItem("token"),
//             // },
//             params: {
//                 offset: 0,
//                 limit: 1000000,
//             },
//         }
//         );
//         return response.data;
//     } catch (err) {
//         return rejectWithValue(err.response);
//     }
// }
// );