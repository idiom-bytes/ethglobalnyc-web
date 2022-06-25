import axios from "axios";

import { API_URL } from "env";

export const requestVisualData = async () => {
  try {
    const visualData = await axios.get(API_URL);
    return visualData.data;
  } catch (e) {}

  return {};
};
