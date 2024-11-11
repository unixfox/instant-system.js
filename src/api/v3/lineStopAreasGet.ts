import { StopAreas } from "../../model/v3/stopAreas.ts";
import { DEV_BASE_URL, PROD_BASE_URL, V3_GET_LINE_STOP_AREA } from "../../utils/endpoints.ts";
import { ISFetcher } from "../../utils/fetcher.ts";

export const getLineStopAreasV3 = async (networkID: number, lineID:string, useDevInstance=false): Promise<StopAreas> => {
  const response = await ISFetcher(useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V3_GET_LINE_STOP_AREA(networkID,lineID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  const data = await response.json();

  return data as StopAreas;
};