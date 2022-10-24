import axios from "axios";


export default {
  requestOrderHistory(page) {
    const options = {
      params: {
        page: page
      }
    }
    return axios.get("/order-service/api/customer/order/history", options);
  },
  addItemToBasket(item) {
    item.itemOptionIds = [];
    for (const itemId of item.otherOptions) {
      item.itemOptionIds.push(itemId)
    }
    item.itemOptionIds.push(item.requireOption)
    return axios.post("/order-service/api/customer/order/item", item);
  },
  saveOrder(order) {
    return axios.post("/order-service/api/customer/order/orders", order);
  },
  getOrder() {
    return axios.get("/order-service/api/customer/order/orders");
  },
  deleteOrderItem(orderItemId) {
    return axios.delete("/order-service/api/customer/orderItem/" + orderItemId);
  },
  getOrderDetail(orderId) {
    return axios.get("/order-service/api/order-detail/" + orderId);
  }
}
