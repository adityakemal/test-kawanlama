import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home/home.reducer";



export const store = configureStore({
    reducer: {
        home: homeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});
