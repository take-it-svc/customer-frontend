import axios from "axios";


export default {
  requestNotification() {
    return axios.get("/notification-service/notifications");
  },
  countsNotification() {
    return axios.get("/notification-service/api/notification/counts");
  },
  readNotification(id, isRead) {
    const body = {
      read: isRead
    }
    return axios.patch("/notification-service/notification/" + id, body)
  }
}
