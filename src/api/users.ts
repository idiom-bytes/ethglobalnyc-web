import axios from "axios";

import { API_URL } from "../env";

const URL_PREFIX = "/users";

// Returns the addresses that interacted with the smart contracts of the app
export const getUsersOfApp = async (appId: string) => {
  try {
    const rawData = await axios.get(`${API_URL}${URL_PREFIX}?app=${appId}`);
    return rawData.data;
  } catch (e) {}

  return {};
};
