"use client";
import { Box, Heading, Text, VStack, HStack, Badge } from "@chakra-ui/react";

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
  return (
    <Box borderWidth={1} borderRadius="lg" p={6}>
      <VStack align="stretch" spacing={6}>
        <Box>
          <Heading as="h2" size="xl">{name}</Heading>
          <Text fontSize="xl" color="gray.500">{title}</Text>
          <Text>{email} | {phone}</Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={2}>Summary</Heading>
          <Text>{summary}</Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={2}>Experience</Heading>
          {experience.map((exp, index) => (
            <Box key={index} mb={4}>
              <Heading as="h4" size="md">{exp.position}</Heading>
              <Text fontWeight="bold">{exp.company}</Text>
              <Text fontSize="sm" color="gray.500">{exp.duration}</Text>
              <Text mt={2}>{exp.description}</Text>
            </Box>
          ))}
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={2}>Education</Heading>
          {education.map((edu, index) => (
            <Box key={index} mb={2}>
              <Text fontWeight="bold">{edu.institution}</Text>
              <Text>{edu.degree}, {edu.year}</Text>
            </Box>
          ))}
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={2}>Skills</Heading>
          <HStack wrap="wrap">
            {skills.map((skill, index) => (
              <Badge key={index} colorScheme="blue" mr={2} mb={2}>
                {skill}
              </Badge>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ResumePreview;