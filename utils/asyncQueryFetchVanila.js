const tempOpt = {
  ssr: false,
  lazy: false,
};
export default async function (query, variables, clientId, options) {
  const { data, status, error, refresh, execute, clear } = await useAsyncQuery(
    query,
    variables,
    () => ({
      // fetchPolicy: "network-only",
      fetchPolicy: "no-cache",
      clientId: "user",
      context: {
        headers: {
          "x-hasura-role": role,
        },
      },
      enabled: enabled.value,
      // prefetch: false,
    })
  );
  console.log("output: ", data.value);
  return { data, status, error, refresh, execute, clear };
}

// ate('hello', 'world', "ClientId.Default", tempOpt);

// export declare function useAsyncQuery
// <T,
// DataT = T,
// PickKeys extends KeysOf<DataT> = KeysOf<DataT>,
// DefaultT = null,
// NuxtErrorDataT = unknown
// >
// (opts: TAsyncQuery<T>,
//   options?: AsyncDataOptions<T, DataT, PickKeys, DefaultT>)
// : AsyncData
// <PickFrom<DataT, PickKeys> |
// DefaultT,
// (NuxtErrorDataT extends Error | NuxtError ? NuxtErrorDataT : NuxtError<NuxtErrorDataT>)
// | null
// >;
