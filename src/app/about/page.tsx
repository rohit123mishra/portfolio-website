"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import SkillsShowcase from "../components/SkillsShowcase";

export default function About() {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" mb={6}>
        About Me
      </Heading>
      <Text fontSize="lg" mb={6}>
        I'm a web developer with experience in React, Next.js, and various other technologies.
        My goal is to create user-friendly and efficient web applications that solve real-world problems.
      </Text>
      
      <SkillsShowcase />
    </Box>
  );
}