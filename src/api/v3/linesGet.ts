import { LinesV3 } from "../../model/v3/lines.ts";
import { DEV_BASE_URL, PROD_BASE_URL, V3_GET_LINES } from "../../utils/endpoints.ts";
import { ISFetcher } from "../../utils/fetcher.ts";

export const getLinesV3 = async (networkID: number, useDevInstance=false): Promise<LinesV3> => {
  const response = await ISFetcher(useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V3_GET_LINES(networkID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  const data = await response.json();

  return data as LinesV3;
};