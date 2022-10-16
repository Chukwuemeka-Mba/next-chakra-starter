import Head from "next/head";
import { Box } from "@chakra-ui/react";
import logo from "../assets/icons/sorta-logo.svg";
const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dz37h4oq1/image/upload/v1665962584/all/sorta-logo_oe303b.png"
        />
        <title>
          Sorta Server | No.1 Application for sorting twitter bookmarks
        </title>
      </Head>
      {children}
    </Box>
  );
};

export default Main;
