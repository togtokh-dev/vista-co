import v1 from "./v1";
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
  config,
  jsonToQueryString,
};
export default VISTA;
export { default as v1 } from "./v1";
