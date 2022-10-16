import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import theme from "../layouts/theme";
import Main from "../layouts/main";

import "../styles/index.scss";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
