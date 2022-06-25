import axios from "axios";

import { API_URL } from "../env";

const URL_PREFIX = "/app-watchers";

export const getAppWatchers = async (userAddress: string) => {
  try {
    const rawData = await axios.get(
      `${API_URL}${URL_PREFIX}?user=${userAddress}`
    );
    return rawData.data;
  } catch (e) {}

  return {};
};

export const createAppWatchers = async (userAddress: string, appId: string) => {
  try {
    const rawData = await axios.post(`${API_URL}${URL_PREFIX}`, {
      user: userAddress,
      appId,
    });
    return rawData.data;
  } catch (e) {}

  return {};
};
