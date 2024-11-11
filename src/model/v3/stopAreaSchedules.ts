import { DisruptionV3 } from "./disruption.ts";
import { LineV3 } from "./line.ts";
import { StopArea } from "./stopArea.ts";

export interface DirectionTime {
  businessDate: string;
  vehicleJourneyId: string;
  vehicleJourneyName: string;
  destinationId: string;
  destinationDisplay: string;
  stopAreaId: string;
  stopPointId: string;
  stopPointName: string;
  stopPointLat: number;
  stopPointlon: number;
  departureDateTime: string;
  departureWait: number;
  precision: number;
  boarding: "YES" | "NO";
  alighting: "YES" | "NO";
  realTime: 1;
  theoreticalDepartureDateTime: string;
  departureDelay: number;
  maj: number;
  majIso8601: number;
  departureDet: number;
}

export interface Direction {
  direction: {
    direction: "OUTWARD" | "RETURN";
    display: string;
  };
  times?: DirectionTime[];
  isTerminus: boolean;
}

export interface LineSchedules {
  stopArea: StopArea;
  type: "DIRECTION";
  types: ["LINE"];
  lines: LineV3[];
  directions: Direction[];
}

export interface StopAreaSchedules {
  stopArea: StopArea;
  type: "LINE";
  types: ["LINE"];
  lines: LineSchedules[];
}

export interface LineStopAreaSchedules {
  disruptions: DisruptionV3[];
  stopAreas: StopAreaSchedules[];
}
