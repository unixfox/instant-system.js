import { VehicleJourneysDirectionsV3 } from "../../model/v3/vehicleJourneysDirections.ts";
import { DEV_BASE_URL, PROD_BASE_URL, V3_GET_VEHICLEJOURNEYS_DIRECTIONS } from "../../utils/endpoints.ts";
import { ISFetcher } from "../../utils/fetcher.ts";

export const getVehicleJourneysDirectionsV3 = async (networkID: number, lineID: string, key: number = networkID, realtime: boolean = true, now: boolean = true, useDevInstance = false): Promise<VehicleJourneysDirectionsV3> => {
  let endpoint = useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V3_GET_VEHICLEJOURNEYS_DIRECTIONS(networkID, lineID);

  if (key) {
    endpoint += "&key=" + key;
  }
  if (realtime) {
    endpoint += "&realtime=1";
  }
  if (now) {
    endpoint += "&now=1";
  }

  const response = await ISFetcher(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data as VehicleJourneysDirectionsV3;
};
