import { defineApolloClient } from "@nuxtjs/apollo/config";

export default defineApolloClient({
  httpEndpoint: "https://graphql.canopyapi.co",
  browserHttpEndpoint: "",
  wsEndpoint: "",
  httpLinkOptions: {},
  wsLinkOptions: {},
  websocketsOnly: false,
  connectToDevTools: false,
});
