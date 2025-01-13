import v1 from "./v1";
import v2 from "./v2";
export const jsonToQueryString = (params: { [key: string]: any }) => {
  const query = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");
  return query ? `?${query}` : "";
};

export const config: {
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
const VISTA = {
  v1,
  v2,
  config,
  jsonToQueryString,
};
export default VISTA;
export { default as v1 } from "./v1";
export { default as v2 } from "./v2";
