import axios from "axios";
import qs from "qs";
import {client_id, client_secret} from "./keys.js";

async function getToken() {
  const instance = axios.create({
    baseURL: "https://services.sentinel-hub.com",
  });

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };

  const body = qs.stringify({
    client_id,
    client_secret,
    grant_type: "client_credentials",
  });

  let token;

  // All requests using this instance will have an access token automatically added
  await instance.post("/oauth/token", body, config).then((resp) => {
    token = resp.data.access_token;
  });
  return token;
}

export {getToken};
