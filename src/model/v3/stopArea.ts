import { Mode } from "../mode.ts";
import { LineV3 } from "./line.ts";

export interface StopArea {
  id: string;
  gisTypeId: string;
  type: string;
  name: string;
  lat: number;
  lon: number;
  city: string;
  modes?: Mode[];
  lines: LineV3[];
  commercialModes: object;
  actions: Action[];
}

interface Action {
  elementType: string;
  actionType: string;
  enabled: boolean;
  labelKey: string;
}
