import { createSlice } from '@reduxjs/toolkit';
import { buyItem, cancel, getOrders } from '../Services/OrderService';

const orderSlice = createSlice({
    name: 'order',
    initialState: getOrders(1),
    reducers: {
        buy: (state, action) => {
            state=buyItem({ userId: action.payload.userId, itemId: action.payload.itemId, quantity: action.payload.quantity });
            return state;
        },
        cancelOrder: (state, action) => {
            state=cancel(action.payload.id);
            return state;
        }
    },
});

export const { buy, cancelOrder} = orderSlice.actions;

export default orderSlice.reducer;