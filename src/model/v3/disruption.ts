import type { DisruptionLevelV3 } from "./disruptionLevel.ts";
import type { LineV3 } from "./line.ts";

export interface CurrentDisruptionV3 {
  timestamp: string;
  lines: lines[];
}

interface lines {
  currentDisruptions: DisruptionV3[];
}
export interface DisruptionV3 {
  operatorId: string;
  id: string;
  title: string;
  messages: Message[];
  level: DisruptionLevelV3;
  lines: LineV3[];
  issueDate: string;
  startValidity: string;
  endValidity: string;
  updateDate: string;
}

interface Message {
  text: string;
}

