import { StopAreaSchedules } from "../../model/v3/stopAreaSchedules.ts";
import { DEV_BASE_URL, PROD_BASE_URL, V3_GET_LINE_STOP_AREA_SCHEDULES } from "../../utils/endpoints.ts";
import { ISFetcher } from "../../utils/fetcher.ts";

export const getLineStopAreaSchedulesV3 = async (networkID: number, lineID:string, stopAreaID: string, useDevInstance=false): Promise<StopAreaSchedules> => {
  const response = await ISFetcher(useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V3_GET_LINE_STOP_AREA_SCHEDULES(networkID,lineID,stopAreaID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  const data = await response.json();

  return data as StopAreaSchedules;
};