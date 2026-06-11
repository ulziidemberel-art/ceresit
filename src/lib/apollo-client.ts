import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

const ERXES_API_URL = process.env.ERXES_API_URL || "https://ulziidemberel.next.erxes.io/gateway/graphql";
const ERXES_APP_TOKEN = process.env.ERXES_APP_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6InlUSE9Fem11ZVkxbmlZYkZiMDNyNiIsImlhdCI6MTc4MTAwNDMyNn0.8RDQVrd50HWr1fTMUO67LAfoMXnESE59TEq7lkVDZnQ";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: ERXES_API_URL,
      headers: {
        "x-app-token": ERXES_APP_TOKEN,
      },
    }),
  });
});
