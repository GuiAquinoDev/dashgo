import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from 'react-query/devtools'
import { theme } from "../styles/theme";

import { QueryClient, QueryClientProvider } from "react-query";
import { SideBarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";

if (process.env.NODE_ENV !== "production") {
  makeServer();
}

const queryClient = new QueryClient

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
