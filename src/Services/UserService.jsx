const registerUser = async (user) => {
    let existing=localStorage.getItem("users");
    const users=existing?JSON.parse(existing):[];
    user={...user, id:users.length+1};
    users.push(user);
    delete user.cnfPassword;
    localStorage.setItem("users", JSON.stringify(users));
    return user.id;
}
const loginUser = async (user) => {
    let existing=localStorage.getItem("users");
    const users=existing?JSON.parse(existing):[];
    const index=users.findIndex(u=>u.email===user.email && u.password===user.password);
    if(index!==-1)return users[index];
    throw new Error("Invalid credentials");
}

export  {registerUser, loginUser};