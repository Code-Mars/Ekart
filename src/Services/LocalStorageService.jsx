const setCartItems = (item) => {
    localStorage.setItem('cart', JSON.stringify(item));
}
const getCartItems =  () => {
    let existing = localStorage.getItem('cart');
    return existing ? JSON.parse(existing) : [];
}
const setUser=(user)=>{
    localStorage.setItem('user', JSON.stringify(user));
}
const getUser=()=>{
    let existing = localStorage.getItem('user');
    return existing ? JSON.parse(existing) : null;
}
const setWishlist=(wishlist)=>{
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
const getWishlist=()=>{
    let existing = localStorage.getItem('wishlist');
    return existing ? JSON.parse(existing) : [];
}
export default { setCartItems, getCartItems, setUser, getUser, setWishlist, getWishlist};