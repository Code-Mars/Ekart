import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/CartSlice';
import userReducer from './Slices/UserSlice';
import wishlistReducer from './Slices/WishlistSlice';
import orderReducer from './Slices/OrderSlice';
export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer, 
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});
