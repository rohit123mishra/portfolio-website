"use client";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1",
    imageUrl: "https://via.placeholder.com/300",
    projectUrl: "https://github.com/yourusername/project1",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project 2",
    description: "This is a description of Project 2",
    imageUrl: "https://via.placeholder.com/300",
    projectUrl: "https://github.com/yourusername/project2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" mb={6}>
        My Projects
      </Heading>
      <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}