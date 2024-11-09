import type { NetworkV3 } from "../../model/v3/network.ts";
import { DEV_BASE_URL, PROD_BASE_URL, V3_GET_NETWORK } from "../../utils/endpoints.ts";
import { ISFetcher } from "../../utils/fetcher.ts";

export const getNetworkV3 = async (networkID: number, useDevInstance=false): Promise<NetworkV3> => {
  const response = await ISFetcher(useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V3_GET_NETWORK(networkID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();

  return data as NetworkV3;
};