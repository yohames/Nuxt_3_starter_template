import clientsEnum from "@/utils/apolloClientsEnum";

interface Options {
  server?: boolean;
  lazy?: boolean;
  immediate?: boolean;
  default?: () => any;
  transform?: (data: any) => any;
  getCachedData?: (data: any) => any;
  // pick?: string[];
  // watch?: string[];
  deep?: boolean;
  dedupe?: "cancel" | "defer";
}
const tempOpt = {
  server: false,
};

const authToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

// =====================================
export default async function ({
  query,
  variables,
  clientId = clientsEnum.Default,
  context = {},
  options = tempOpt,
}: {
  query: any;
  variables: any;
  clientId?: clientsEnum;
  context?: {
    [key: string]: any;
  };
  options?: Options;
}) {
  const { data, status, error, refresh, execute, clear } = await useAsyncQuery(
    query,
    variables,
    clientId,
    {
      fetchPolicy: "network-only",
      headers: {
        "custom-user-role": "role",
        Authorization: authToken,
      },
    },
    options
  );
  return { data, status, error, refresh, execute, clear };
}
