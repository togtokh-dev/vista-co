// src/lib/v1/index.ts
import { BackgroundJob } from "./BackgroundJob";
import { Booking } from "./Booking";
import { RESTData } from "./RESTData";
import { RESTTicketing } from "./RESTTicketing";
import { OData } from "./OData";

export default function createV1(config: {
  token: string;
  host: string;
  regionCode: string;
  logger: boolean;
}) {
  return {
    BackgroundJob: BackgroundJob(config),
    Booking: Booking(config),
    RESTData: RESTData(config),
    RESTTicketing: RESTTicketing(config),
    OData: OData(config),
  };
}
