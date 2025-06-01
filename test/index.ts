// /test/index.ts
import VistaClient from "../src";

// Create an instance of the VistaClient
const vista = new VistaClient();

// Set the config values
vista.config.host = "";
vista.config.token = "";
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
  }
}

main().catch(console.error);
