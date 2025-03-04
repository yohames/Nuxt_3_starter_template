<script setup lang="ts">
import clientsEnum from "@/utils/apolloClientsEnum";
import ships_query from "@/graphql/queries/ships.gql";
import characters_query from "@/graphql/queries/characters.gql";

const variables = {
  limit: 5,
};

const selectedClient = ref(clientsEnum.ClientRickAndMorty);
const selectedQuery = computed(() =>
  selectedClient.value == clientsEnum.Default ? ships_query : characters_query
);
// const { data, status, refresh, execute } = await asyncQueryFetch(
//   selectedQuery.value,
//   variables,
//   selectedClient.value
// );

const { data, status, refresh, execute } = useAsyncQuery(
  selectedQuery.value,
  variables,
  selectedClient.value
);

function refresher() {
  refresh();
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
    <button @click="refresher">Refresh</button>
    <select v-model="selectedClient" @change="refresher">
      <option v-for="client in clientsEnum" :key="client" :value="client">
        {{ client }}
      </option>
    </select>

    <select v-model="variables.limit" @change="refresher">
      <option v-for="client in [1, 2, 3, 4, 5]" :key="client" :value="client">
        {{ client }}
      </option>
    </select>

    <h1>{{ selectedClient }}</h1>
    <pre>
          {{ data }}
    </pre>
  </div>
</template>

<style scoped></style>
