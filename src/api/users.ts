import axios from "axios";

import { API_URL } from "../env";

const URL_PREFIX = "/users";

export const getUsersForApp = async (appId: string) => {
  try {
    const rawData = await axios.get(`${API_URL}${URL_PREFIX}?app=${appId}`);
    return rawData.data;
  } catch (e) {}

  return {};
};
