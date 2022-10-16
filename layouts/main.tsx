import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>
          Sorta Server | No.1 Application for sorting twitter bookmarks
        </title>
      </Head>
      {children}
    </Box>
  );
};

export default Main;
