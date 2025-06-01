// src/lib/vista-co.ts

import createV1 from "./v1"; // renamed to a factory
import createV2 from "./v2";
import { BackgroundJob } from "./v1/BackgroundJob";

// Utility to convert a JSON object to a query string
export const jsonToQueryString = (params: { [key: string]: any }): string => {
  const query = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join("&");
  return query ? `?${query}` : "";
};

// Vista API Client class
export class VistaClient {
  public config: {
    token: string;
    host: string;
    regionCode: string;
    logger: boolean;
  } = {
    token: "",
    host: "",
    regionCode: "",
    logger: false,
  };

  // Inject config into v1 methods dynamically
  public get v1() {
    return createV1(this.config);
  }

  public get v2() {
    return createV2(this.config);
  }

  public jsonToQueryString = jsonToQueryString;
}

// Export the class
export default VistaClient;
