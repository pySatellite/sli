import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(
  import.meta.env.JSON_SERVER_FCRUD_LOCAL_URL
);
