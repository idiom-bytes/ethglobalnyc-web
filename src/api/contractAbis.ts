import axios from "axios";

import { API_URL } from "../env";

const URL_PREFIX = "/contract-abis";

export const getContractAbis = async (userAddress: string) => {
  try {
    const rawData = await axios.get(
      `${API_URL}${URL_PREFIX}?user=${userAddress}`
    );
    return rawData.data;
  } catch (e) {}

  return {};
};

export const createContractAbi = async (
  userAddress: string,
  chainAdddress: string,
  contractAbiJson: string
) => {
  try {
    const rawData = await axios.post(`${API_URL}${URL_PREFIX}`, {
      user: userAddress,
      chainAdddress,
      contractAbiJson,
    });
    return rawData.data;
  } catch (e) {}

  return {};
};

export const updateAddressContractAbi = async (
  userAddress: string,
  chainAdddress: string,
  contractAbiJson: string
) => {
  try {
    const rawData = await axios.put(`${API_URL}${URL_PREFIX}`, {
      user: userAddress,
      chainAdddress,
      contractAbiJson,
    });
    return rawData.data;
  } catch (e) {}

  return {};
};
