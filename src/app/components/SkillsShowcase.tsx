"use client";
import { Box, Heading, SimpleGrid, Text, Progress, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "CSS/Sass", level: 85 },
  { name: "GraphQL", level: 70 },
];

const SkillsShowcase = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h2" size="xl" mb={6}>
        Skills
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        {skills.map((skill, index) => (
          <MotionBox
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <VStack align="stretch">
              <Text fontWeight="bold">{skill.name}</Text>
              <Progress value={skill.level} colorScheme="blue" />
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsShowcase;