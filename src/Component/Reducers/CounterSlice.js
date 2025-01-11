import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count:0
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        addCount : (state,action)=>{
            state.count+=action.payload;
        },
        
    }

});

export const {addCount} = CounterSlice.actions;
export default CounterSlice.reducer;