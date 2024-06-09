import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../Services/LocalStorageService';

const cartSlice = createSlice({
    name: 'cart',
    initialState: LocalStorageService.getCartItems(),
    reducers: {
        addItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) state[index].quantity = Math.min(action.payload.quantity+state[index].quantity, 10);
            else state.push(action.payload);
            LocalStorageService.setCartItems(state);
        },
        updateItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
                LocalStorageService.setCartItems(state);
            }
        },
        removeItem: (state, action) => {
            state=state.filter(item => item.id !== action.payload.id);
            LocalStorageService.setCartItems(state);
            return state;
          },
        removeAll: (state) => {
            state=[];
            LocalStorageService.setCartItems(state);
            return state;
        }
    }
});

export const { addItem, updateItem, removeItem, removeAll } = cartSlice.actions;

export default cartSlice.reducer;