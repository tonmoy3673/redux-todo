import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "../Component/Reducers/CounterSlice";
import { TodoSlice } from "../Component/Reducers/TodoSlice";
import { UserSlice } from "../Component/Reducers/UserSlice";

export const store = configureStore({
    reducer: {
        todos: TodoSlice.reducer,
        counter:CounterSlice.reducer,
        users: UserSlice.reducer
    },
})