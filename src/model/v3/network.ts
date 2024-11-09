import { Mode } from "../mode.ts";

export interface NetworkV3 {
  id: number;
  name: string;
  networkLoaded: boolean;
  tripplannerLoaded: boolean;
  lat: number;
  lon: number;
  modes?: Mode[];
}
