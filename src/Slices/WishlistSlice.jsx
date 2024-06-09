import { createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../Services/LocalStorageService";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:LocalStorageService.getWishlist(),
    reducers:{
        toggleItemInWishlist:(state,action)=>{
            const index = state.findIndex(item => item === action.payload.id);
            if (index !== -1){
                state=state.filter(item => item !== action.payload.id);
            }
            else state.push(action.payload.id);
            LocalStorageService.setWishlist(state);
        }
    }
});
export const {toggleItemInWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;