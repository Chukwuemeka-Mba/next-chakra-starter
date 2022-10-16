import { useRef } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import {
  BsMenuButtonWide,
  BsGithub,
  BsBookmarksFill,
  BsArrowUpRightCircle,
} from "react-icons/bs";
import Logo from "./Logo";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  CloseButton,
} from "@chakra-ui/react";
import PrimaryButton from "../utils/PrimaryButton";

//
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        <BsMenuButtonWide />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent="space-between"
              py={5}
              alignItems="center"
              w="100%"
            >
              <Logo />
              <CloseButton onClick={onClose} />
            </Box>
          </DrawerHeader>

          <DrawerBody py={15}>
            <Input placeholder="Type here..." />
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="center"
              py={20}
              gap={7}
              alignItems="flex-start"
            >
              <Link href="/docs">
                <Text
                  fontWeight={600}
                  fontSize="1xl"
                  cursor="pointer"
                  gap="4"
                  alignItems="center"
                  display="flex"
                >
                  How it works... <BsBookmarksFill />
                </Text>
              </Link>
              <Link href="/creators">
                <Text
                  fontWeight={600}
                  fontSize="1xl"
                  cursor="pointer"
                  gap="4"
                  alignItems="center"
                  display="flex"
                >
                  Meet the creators <BsArrowUpRightCircle />
                </Text>
              </Link>
              <Link href="/contribute">
                <Text
                  fontWeight={600}
                  fontSize="1xl"
                  cursor="pointer"
                  gap="4"
                  alignItems="center"
                  display="flex"
                >
                  Contribute to the project <BsGithub />
                </Text>
              </Link>
            </Box>
          </DrawerBody>

          <DrawerBody>
            <PrimaryButton />
          </DrawerBody>

          <DrawerFooter>
            <CloseButton onClick={onClose} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
