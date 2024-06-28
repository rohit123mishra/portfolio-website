"use client";
import { Box, Text, Flex, useColorMode, Container, Icon, useToken } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();
  const [purple500, purple600, yellow400, yellow500] = useToken('colors', ['purple.500', 'purple.600', 'yellow.400', 'yellow.500']);

  return (
    <Box 
      as="footer" 
      bgGradient={colorMode === "light" 
        ? `linear(to-r, ${purple500}, ${purple600})` 
        : "linear(to-r, gray.800, gray.900)"
      }
      color="white"
      py={6}
      boxShadow="0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)"
    >
      <Container maxW="container.xl">
        <Flex direction="column" align="center" justify="center">
          <Text fontSize="sm" mb={3} fontWeight="medium">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </Text>
          <Flex align="center" fontSize="sm">
            <Text mr={1}>Made with</Text>
            <Icon 
              as={FaHeart} 
              color={colorMode === "light" ? yellow400 : yellow500} 
              mx={1}
              boxSize={4}
            />
            <Text ml={1}>in Your City</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;