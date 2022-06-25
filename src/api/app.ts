import axios from "axios";

import { API_URL } from "../env";

const URL_PREFIX = "/apps";

export const getApps = async () => {
  try {
    const rawData = await axios.get(`${API_URL}${URL_PREFIX}`);
    return rawData.data;
  } catch (e) {}

  return {};
};

export const getAppsForUser = async (userAddress: string) => {
  try {
    const rawData = await axios.get(
      `${API_URL}${URL_PREFIX}?user=${userAddress}`
    );
    return rawData.data;
  } catch (e) {}

  return {};
};

export const createApp = async (userAddress: string, chainId: string) => {
  try {
    const rawData = await axios.post(`${API_URL}${URL_PREFIX}`, {
      user: userAddress,
      chainId,
    });
    return rawData.data;
  } catch (e) {}

  return {};
};
