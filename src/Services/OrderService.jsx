
const buyItem = (data) => {
  const existing = localStorage.getItem("orders");
  let orders = existing ? JSON.parse(existing) : [];
  let order = {
    ...data,
    status: "ORDERED",
    date: new Date().toISOString(),
    id: orders.length + 1
  };
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  return orders.reverse();
}

const getOrders = (userId) => {
  let existing = localStorage.getItem("orders");
  let orders = existing ? JSON.parse(existing) : [];
  return orders.filter(order => order.userId === parseInt(userId)).reverse();
}
const cancel=(id)=>{
  const existing = localStorage.getItem("orders");
  let orders = existing ? JSON.parse(existing) : [];
  const index = orders.findIndex(order =>order.id == id);
  orders[index].status = "CANCELLED";
  orders[index].date = new Date().toISOString();
  localStorage.setItem("orders", JSON.stringify(orders));
  return orders.reverse();
}
export { buyItem, getOrders, cancel }