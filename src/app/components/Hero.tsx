"use client";
import { Box, Heading, Text, Button, VStack, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const Hero = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Box bg={bgColor} py={20}>
      <VStack spacing={8} align="center" maxW="800px" mx="auto" textAlign="center">
        <Heading as="h1" size="2xl">
          Hi, I'm [Your Name]
        </Heading>
        <Text fontSize="xl">
          A passionate web developer creating beautiful and functional websites
        </Text>
        <Button as={NextLink} href="/projects" colorScheme="blue" size="lg">
          View My Work
        </Button>
      </VStack>
    </Box>
  );
};

export default Hero;