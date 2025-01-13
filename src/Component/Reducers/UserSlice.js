import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    users:[{id:1, name:'tonmoy',email:'tonmoy@gmail.com'}]
}
export const UserSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
          const user = {id: nanoid(), ...action.payload};
          state.users.push(user);
          console.log(user);
        },
        deleteUser:(state,action)=>{
            state.users= state.users.filter((user)=>user.id !== action.payload)
        }
    }

});

export const {addUser,deleteUser} = UserSlice.actions;
export default UserSlice.reducer;