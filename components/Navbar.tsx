import { useState } from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
import { useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import logo from "../assets/icons/sorta-logo.svg";
import Logo from "./Logo";
function Navbar() {
  const [showSidebar, hideSidebar] = useState(false);

  const toggleSidebar = () => {
    hideSidebar((prevState) => !prevState);
  };
  return (
    <Box
      position="fixed"
      as="nav"
      w="100vw"
      margin={0}
      px={10}
      py={5}
      display={"flex"}
      justifyContent="space-between"
      alignItems={"center"}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex="2"
    >
      <Container
        margin={0}
        display="flex"
        maxW="container.md"
        alignItems="center"
      >
        <Logo />
        <Box gap="5" px="10" display={{ base: "none", md: "flex" }}>
          <p>How It works</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Contact</p>
        </Box>
      </Container>
      <Box display="flex" gap="2">
        <ThemeToggleButton />
        <Sidebar />
      </Box>
    </Box>
  );
}

export default Navbar;
