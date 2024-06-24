"use client";
import { Box, Flex, Link, Button, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "gray.100" : "gray.900"} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NextLink} href="/" fontWeight="bold">
            Your Name
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={NextLink} href="/about" mr={4}>
            About
          </Link>
          <Link as={NextLink} href="/projects" mr={4}>
            Projects
          </Link>
          <Link as={NextLink} href="/blog" mr={4}>
            Blogs
          </Link>
          <Link as={NextLink} href="/contact" mr={4}>
            Contact
          </Link>
          <Link as={NextLink} href="/resume" mr={4}>
            Resume
          </Link>
          <Link as={NextLink} href="/admin/dashboard" mr={4}>
            Admin
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
