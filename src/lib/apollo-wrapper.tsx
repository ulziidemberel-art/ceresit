"use client";

import { HttpLink } from "@apollo/client";
import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";

const NEXT_PUBLIC_ERXES_API_URL = process.env.NEXT_PUBLIC_ERXES_API_URL || "https://ulziidemberel.next.erxes.io/gateway/graphql";
const NEXT_PUBLIC_ERXES_APP_TOKEN = process.env.NEXT_PUBLIC_ERXES_APP_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6InlUSE9Fem11ZVkxbmlZYkZiMDNyNiIsImlhdCI6MTc4MTAwNDMyNn0.8RDQVrd50HWr1fTMUO67LAfoMXnESE59TEq7lkVDZnQ";

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: NEXT_PUBLIC_ERXES_API_URL,
      headers: {
        "x-app-token": NEXT_PUBLIC_ERXES_APP_TOKEN,
      },
    }),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
