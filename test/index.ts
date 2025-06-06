// /test/index.ts
import VistaClient from "../src";

// Create an instance of the VistaClient
const vista = new VistaClient();

// Set the config values
vista.config.host = "http://122.201.17.122";
vista.config.token = "8dfa4c677b7245e6a5fe4627a9b1d65e";
vista.config.regionCode = ""; // optional
vista.config.logger = true; // optional

async function main() {
  const cinemasRes = await vista.v1.OData.Cinemas({});
  if (cinemasRes.data) {
    const cinema = cinemasRes.data[0];

    const screensRes = await vista.v1.OData.ScreenAttributes({
      $filter: `CinemaId eq '${cinema.ID}'`,
    });

    if (screensRes.data) {
      console.log(screensRes.data[0]);
    }
    const da = await vista.v2.Orders.SessionCreate(cinema.ID);
    console.log("--->", da.data?.order);
  }
}

main().catch(console.error);
