import { v1 } from "../src/";

async function main() {
  console.log(await v1.OData.ScreenAttributes({}));
}
main();
