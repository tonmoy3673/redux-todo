import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
   todos:[{id:1, text:'Hello Redux'}] 
}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {id: nanoid(), text: action.payload};
            state.todos.push(todo)
        }
    }

});

export const {addTodo} = TodoSlice.actions;
export default TodoSlice.reducer;

