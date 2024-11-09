import type { DisruptionV3 } from "./disruption.ts";
import type { LineV3 } from "./line.ts";

export interface LinesV3 {
  lines: LineV3[];
  disruptions: DisruptionV3[];
}
