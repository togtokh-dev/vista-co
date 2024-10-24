import VISTA, { v1, config } from "../src/";

async function main() {
  VISTA.config.host = "http://122.201.17.122";
  VISTA.config.token = "8dfa4c677b7245e6a5fe4627a9b1d65e";
  const cinemas = await v1.OData.Cinemas({});
  if (cinemas.data) {
    const cinema = cinemas.data[0];
    //  console.log(cinema);
    const screens = await v1.OData.ScreenAttributes({
      $filter: `CinemaId eq '${cinema.ID}'`,
    });
    if (screens.data) {
      console.log(screens.data[0]);
    }
  }
  // console.log(await v1.OData.ScreenAttributes({}));
}
main();
