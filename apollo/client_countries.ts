import { defineApolloClient } from "@nuxtjs/apollo/config";

export default defineApolloClient({
  httpEndpoint: "https://countries.trevorblades.com/graphql",
  browserHttpEndpoint: "",
  wsEndpoint: "",
  httpLinkOptions: {},
  wsLinkOptions: {},
  websocketsOnly: false,
  connectToDevTools: false,
});
