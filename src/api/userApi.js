import axios from "axios";


export default {
  requestRegisterUser(user) {
    return axios.post("/user-service/store-owner", user);
  },
  getUserData() {
    return axios.get("/user-service/customer/",);
  }
}
