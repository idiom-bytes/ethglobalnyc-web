import axios from "axios";

import { API_URL } from "../env";

const URL_PREFIX = "/chains";

export const getChains = async () => {
  try {
    const rawData = await axios.get(`${API_URL}${URL_PREFIX}`);
    return rawData.data;
  } catch (e) {}

  return {};
};
