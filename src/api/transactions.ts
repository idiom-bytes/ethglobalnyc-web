import axios from "axios";

import { API_URL } from "../env";

const URL_PREFIX = "/transactions";

export const getTransactionsForUser = async (userAddress: string) => {
  try {
    const rawData = await axios.get(
      `${API_URL}${URL_PREFIX}?user=${userAddress}`
    );
    return rawData.data;
  } catch (e) {}

  return {};
};

export const getTransactionsForApp = async (appId: string) => {
  try {
    const rawData = await axios.get(`${API_URL}${URL_PREFIX}?app=${appId}`);
    return rawData.data;
  } catch (e) {}

  return {};
};
