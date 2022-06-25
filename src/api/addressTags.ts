import axios from "axios";

import { API_URL } from "../env";

const URL_PREFIX = "/address-tags";

export const getAddressTags = async (userAddress: string) => {
  try {
    const rawData = await axios.get(
      `${API_URL}${URL_PREFIX}?user=${userAddress}`
    );
    return rawData.data;
  } catch (e) {}

  return {};
};

export const createAddressTag = async (
  userAddress: string,
  chainId: string,
  chainAddress: string,
  taggedString: string
) => {
  try {
    const rawData = await axios.post(`${API_URL}${URL_PREFIX}`, {
      user: userAddress,
      chainId,
      chainAddress,
      taggedString,
    });
    return rawData.data;
  } catch (e) {}

  return {};
};

export const editAddressTag = async (
  userAddress: string,
  tagId: string,
  updatedTaggedString: string
) => {
  try {
    const rawData = await axios.put(`${API_URL}${URL_PREFIX}`, {
      user: userAddress,
      tagId,
      updatedTaggedString,
    });
    return rawData.data;
  } catch (e) {}

  return {};
};
