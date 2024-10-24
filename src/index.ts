import v1 from "./v1";
export const jsonToQueryString = (json: { [key: string]: any }): string => {
  return Object.keys(json)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`)
    .join("&");
};

export const config: {
  token: string;
  host: string;
  regionCode: string;
} = {
  token: "8dfa4c677b7245e6a5fe4627a9b1d65e",
  host: "http://122.201.17.122",
  regionCode: "",
};
export default {
  v1,
  jsonToQueryString,
};
export { default as v1 } from "./v1";
