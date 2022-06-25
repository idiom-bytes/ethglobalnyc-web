import axios from "axios";

import { API_URL } from "../env";

export const getTransactions = async () => {
  try {
    const transactionData = await axios.get(`${API_URL}/transactions`);
    return transactionData.data;
  } catch (e) {}

  return {};
};
