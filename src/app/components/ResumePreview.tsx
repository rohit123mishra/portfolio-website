"use client";
import { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Badge, Button, Flex } from "@chakra-ui/react";

interface ResumePreviewProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  skills: string[];
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  name,
  title,
  email,
  phone,
  summary,
  experience,
  education,
  skills,
}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil((1 + 1 + experience.length + education.length + 1) / itemsPerPage);

  const handlePrevPage = () => setPage(prev => Math.max(1, prev - 1));
  const handleNextPage = () => setPage(prev => Math.min(totalPages, prev + 1));

  const renderPageContent = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let content = [];

    if (startIndex === 0) {
      content.push(
        <Box key="header">
          <Heading as="h2" size="xl">{name}</Heading>
          <Text fontSize="xl" color="gray.500">{title}</Text>
          <Text>{email} | {phone}</Text>
        </Box>,
        <Box key="summary">
          <Heading as="h3" size="lg" mb={2}>Summary</Heading>
          <Text>{summary}</Text>
        </Box>
      );
    }

    const experienceStart = 2;
    const experienceEnd = experienceStart + experience.length;
    if (startIndex < experienceEnd && endIndex > experienceStart) {
      content.push(
        <Box key="experience">
          <Heading as="h3" size="lg" mb={2}>Experience</Heading>
          {experience.slice(Math.max(0, startIndex - experienceStart), endIndex - experienceStart).map((exp, index) => (
            <Box key={index} mb={4}>
              <Heading as="h4" size="md">{exp.position}</Heading>
              <Text fontWeight="bold">{exp.company}</Text>
              <Text fontSize="sm" color="gray.500">{exp.duration}</Text>
              <Text mt={2}>{exp.description}</Text>
            </Box>
          ))}
        </Box>
      );
    }

    const educationStart = experienceEnd;
    const educationEnd = educationStart + education.length;
    if (startIndex < educationEnd && endIndex > educationStart) {
      content.push(
        <Box key="education">
          <Heading as="h3" size="lg" mb={2}>Education</Heading>
          {education.slice(Math.max(0, startIndex - educationStart), endIndex - educationStart).map((edu, index) => (
            <Box key={index} mb={2}>
              <Text fontWeight="bold">{edu.institution}</Text>
              <Text>{edu.degree}, {edu.year}</Text>
            </Box>
          ))}
        </Box>
      );
    }

    if (startIndex <= educationEnd && endIndex > educationEnd) {
      content.push(
        <Box key="skills">
          <Heading as="h3" size="lg" mb={2}>Skills</Heading>
          <HStack wrap="wrap">
            {skills.map((skill, index) => (
              <Badge key={index} colorScheme="blue" mr={2} mb={2}>
                {skill}
              </Badge>
            ))}
          </HStack>
        </Box>
      );
    }

    return content;
  };

  return (
    <Box borderWidth={1} borderRadius="lg" p={6}>
      <VStack align="stretch" spacing={6}>
        {renderPageContent()}
      </VStack>
      <Flex justifyContent="center" mt={4}>
        <Button onClick={handlePrevPage} disabled={page === 1} mr={2}>
          Previous
        </Button>
        <Text mx={4}>
          Page {page} of {totalPages}
        </Text>
        <Button onClick={handleNextPage} disabled={page === totalPages} ml={2}>
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default ResumePreview;