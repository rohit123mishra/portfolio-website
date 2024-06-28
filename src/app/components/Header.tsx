"use client";
import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorMode,
  Container,
  useToken,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [purple500, purple600, yellow400, yellow500] = useToken("colors", [
    "purple.500",
    "purple.600",
    "yellow.400",
    "yellow.500",
  ]);

  return (
    <Box
      bgGradient={
        colorMode === "light"
          ? `linear(to-r, ${purple500}, ${purple600})`
          : "linear(to-r, gray.800, gray.900)"
      }
      py={4}
      shadow="lg"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Link
              as={NextLink}
              href="/"
              fontWeight="bold"
              fontSize="xl"
              color="white"
              _hover={{
                textDecoration: "none",
                color: colorMode === "light" ? yellow400 : yellow500,
              }}
            >
              Your Name
            </Link>
          </Box>
          <Flex alignItems="center" justifyContent="center" flex={1}>
            {["About", "Projects", "Blog", "Contact", "Resume"].map((item) => (
              <Link
                key={item}
                as={NextLink}
                href={`/${item.toLowerCase()}`}
                mx={4}
                fontWeight="medium"
                color="white"
                _hover={{
                  textDecoration: "none",
                  color: colorMode === "light" ? yellow400 : yellow500,
                }}
              >
                {item}
              </Link>
            ))}
          </Flex>
          <Flex alignItems="center">
            <Link
              as={NextLink}
              href="/admin/dashboard"
              mr={4}
              fontWeight="medium"
              color="white"
              _hover={{
                textDecoration: "none",
                color: colorMode === "light" ? yellow400 : yellow500,
              }}
            >
              Admin
            </Link>
            <IconButton
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              size="md"
              fontSize="lg"
              color={colorMode === "light" ? "purple.800" : "yellow.400"}
              bg={colorMode === "light" ? "white" : "gray.700"}
              _hover={{
                bg: colorMode === "light" ? "gray.100" : "gray.600",
              }}
              transition="all 0.2s"
              borderRadius="full"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
