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
        }
    }

});

export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;