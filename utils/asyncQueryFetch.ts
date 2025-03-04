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
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lbGF0LnNhbXVlbEBoYWh1LmpvYnMiLCJwaG9uZV9udW1iZXIiOiIrMjUxOTg4MDA3Nzc1IiwibWV0YWRhdGEiOnsiZW50aXR5X2lkIjoiWnlBOGR3eWd3ODZYSWI4IiwiZnVsbF9uYW1lIjoiTWVsYXQgU2FtdWVsIFNhbXVlbCIsInJvbGVzIjpbImNvcmU6YXBwcm92ZXIiLCJjb25zb2xlOmFkbWluOmVudGVycHJpc2U6dXNlcjptYW5hZ2VyIiwiY29uc29sZTphZG1pbjpjb21wYW55Om1hbmFnZXIiLCJyZXBvcnRlciIsImpvYnM6cmVhZCIsImJhc2ljOnJlYWQiLCJjb25zb2xlOmFkbWluOmJpbGxpbmc6bWFuYWdlciIsImNvcmU6YmFzaWMiLCJ1c2VyIiwiZW5jb2RlciIsImNvbnNvbGU6YWRtaW4iLCJ0ZW1wbGF0ZTpjcmVhdG9yIiwic3VwZXJ2aXNvciIsImpvYnMiLCJwb29sOmFkbWluOm1hbmFnZXIiLCJ1c2VyOnJlYWQiLCJhZG1pbjp1c2VyIiwiY29uc29sZTphZG1pbjp2YWNhbmN5OnJlY3J1aXRlciJdLCJ4LWhhc3VyYS11c2VyLWlkIjoiNWEzMDVkOWEtMTQwNi00YmIxLTk2ZjAtYzc2ZWE4M2ExMmZjIn0sInJvbGUiOlsidXNlciJdLCJpc3MiOiJodHRwczovL2F1dGhvcml6ZXIuaGFodS5qb2JzIiwic3ViIjoiNWEzMDVkOWEtMTQwNi00YmIxLTk2ZjAtYzc2ZWE4M2ExMmZjIiwiYXVkIjpbIjQ0YjZlZTMxLTI2MGItNDI3Ni1iNTg4LTg5Yjg5MzQ1NjIwYSJdLCJleHAiOjE3NDExODQ3NDYsImlhdCI6MTc0MTA5ODM0Nn0.Kp1g_lAW-r8GNinqit98Z7uz6ZrSMjmXomtn1C0_cOslwNslCAt65NkqnZcttqsMPXL-Z-hVM8qJvwaMUBcmnXUgsLH8ipDU7VQ0T0W8UD3RNIh-UtSPzYdeDlLAcYhDCrLknpowcsBYb5DIHat1uEdP8gd-icAkr3tnjpRRKIEyD0DuxtUR6qoqC98bGbLhuuoqhBheyGtr9UWwCOWs6VFNiLIxfU8W51ZKFh1x-J15RLyjbuCGfPI6uCJf5Vfgn8AOz9ToM-uy4R1fOMAkqqE8MLIgB2yvpwe1nDEuZGpVkb3n089NQSDgz6wEYYIYDklCI3O11Y_KsZ64Ulc20w";

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
  console.log("send to client", options);
  const { data, status, error, refresh, execute, clear } = await useAsyncQuery(
    query,
    variables,
    clientId,
    {
      fetchPolicy: "network-only",
      headers: {
        "x-hasura-role": "role",
        Authorization: authToken,
      },
    },
    options
  );
  console.log("output: ", data.value);
  return { data, status, error, refresh, execute, clear };
}
