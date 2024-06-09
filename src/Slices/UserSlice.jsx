import { createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../Services/LocalStorageService";

const userSlice=createSlice({
    name:'user',
    initialState:LocalStorageService.getUser(),
    reducers:{
        setUser:(state,action)=>{
            LocalStorageService.setUser(action.payload);
            state=LocalStorageService.getUser();
            return state;
        }
    }
});
export const {setUser}=userSlice.actions;
export default userSlice.reducer;