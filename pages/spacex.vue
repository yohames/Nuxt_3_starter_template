<script setup lang="ts">
import clientsEnum from "@/utils/apolloClientsEnum";
import ships_query from "@/graphql/queries/ships.gql";

const variables = {
  limit: 5,
};
const tempOpt = {
  server: true,
  default: () => [
    {
      abebe: "abebe",
    },
  ],
};

const { data, status, refresh, execute } = await asyncQueryFetch({
  query: ships_query,
  variables: variables,
  clientId: clientsEnum.Default,
  options: tempOpt,
});

function refresher() {
  execute();
}
</script>
<template>
  <div>
    <div>
      <NuxtLink to="/">SpaceX</NuxtLink>
      <br />
      <NuxtLink to="/rick">Rick</NuxtLink>
    </div>
    <br />

    {{ status }}
    {{ variables.limit }}
    <button @click="refresher">Execute</button>

    <select v-model="variables.limit" @change="refresher">
      <option v-for="client in [1, 2, 3, 4, 5]" :key="client" :value="client">
        {{ client }}
      </option>
    </select>

    <pre>
          {{ data }}
    </pre>
  </div>
</template>

<style scoped></style>
