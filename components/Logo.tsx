import React from "react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import logo from "../assets/icons/sorta-logo.svg";

function Logo() {
  return (
    <Box px="0" display="flex" gap={4} alignItems={"center"}>
      <Image width={50} height={50} src={logo} alt="sorta-logo" />
      <Text fontWeight={700} fontSize="xl">
        Sorta server
      </Text>
    </Box>
  );
}

export default Logo;
