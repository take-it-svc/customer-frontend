import axios from "axios";
import jwt from "@/global/jwt";
import router from "@/router/router";


export default {
  async requestReissue() {
    const config = {
      headers: {
        "X-AUTH-TOKEN": jwt.getToken()
      }
    }

    const res = await axios.get("/user-service/auth/reissue", config);

    const accessToken = res.data.data.accessToken;
    jwt.saveToken(accessToken);
    jwt.saveExpiredTime(res.data.data.expiredTime);
    axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;

    return accessToken;
  },
  requestCheckAccessToken() {
    axios.defaults.headers.common['Authorization'] = "Bearer " + jwt.getToken();

    return axios.get("/user-service/auth/check/access-token");
  },
  logout() {
    axios.post("/user-service/auth/logout", '', {headers: {"X-AUTH-TOKEN": jwt.getToken(),}})
      .finally(() => {
        router.push('/login')
        jwt.removeAll()
      })
  }
}
