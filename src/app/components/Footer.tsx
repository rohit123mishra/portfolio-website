"use client";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" py={4} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;