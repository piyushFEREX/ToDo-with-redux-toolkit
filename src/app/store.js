import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../assets/fertures/todo/todoSclice'

export const store = configureStore({
    reducer:todoReducer,
})