import { defineApolloClient } from "@nuxtjs/apollo/config";

export default defineApolloClient({
  httpEndpoint: "https://spacex-production.up.railway.app",
  browserHttpEndpoint: "",
  wsEndpoint: "",
  httpLinkOptions: {},
  wsLinkOptions: {},
  websocketsOnly: false,
  connectToDevTools: false,
});
