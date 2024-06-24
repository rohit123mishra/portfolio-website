"use client";
import { Box, Heading, Text, Image, Link, Tag, HStack } from "@chakra-ui/react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

const ProjectCard = ({ title, description, imageUrl, projectUrl, tags }: ProjectCardProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={title} />
      <Box p="6">
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>
        <HStack spacing={2} mb={4}>
          {tags.map((tag) => (
            <Tag key={tag} colorScheme="blue">
              {tag}
            </Tag>
          ))}
        </HStack>
        <Link href={projectUrl} color="blue.500" isExternal>
          View Project
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectCard;