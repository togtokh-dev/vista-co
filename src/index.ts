// src/lib/vista-co.ts

import v1 from "./v1";
import v2 from "./v2";

// Utility to convert a JSON object to a query string
export const jsonToQueryString = (params: { [key: string]: any }): string => {
  const query = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join("&");
  return query ? `?${query}` : "";
};

// Class representing a VISTA API client
export class VistaClient {
  public v1 = v1;
  public v2 = v2;

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

  public jsonToQueryString = jsonToQueryString;
}

// Export the class so other modules can create instances
export default VistaClient;

// Optional named exports if needed individually
export { v1, v2 };
