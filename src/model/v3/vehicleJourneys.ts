export interface VehicleJourneysV3 {
  return: VehicleJourney[];
  outward: VehicleJourney[];
}

interface VehicleJourney {
  id: string;
  realTimeStatus: string;
  bear: number;
  speed: number;
  lat: number;
  lon: number;
}
