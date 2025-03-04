import { defineApolloClient } from "@nuxtjs/apollo/config";

export default defineApolloClient({
  httpEndpoint: "https://rickandmortyapi.com/graphql",
  browserHttpEndpoint: "",
  wsEndpoint: "",
  httpLinkOptions: {},
  wsLinkOptions: {},
  websocketsOnly: false,
  connectToDevTools: false,
});
