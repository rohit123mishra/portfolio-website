"use client";
import {
  Box,
  Heading,
  VStack,
  Button,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import ResumePreview from "../components/ResumePreview";

export default function ResumePage() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBgColor = useColorModeValue("white", "gray.800");

  const resumeData = {
    name: "Your Name",
    title: "Full Stack Developer",
    email: "your.email@example.com",
    phone: "(123) 456-7890",
    summary: "Experienced full stack developer with a passion for creating efficient and user-friendly web applications.",
    experience: [
      {
        company: "Tech Company",
        position: "Senior Developer",
        duration: "2020 - Present",
        description: "Led development of multiple web applications using React and Node.js.",
      },
      {
        company: "Startup Inc.",
        position: "Junior Developer",
        duration: "2018 - 2020",
        description: "Contributed to the development of a SaaS platform using Vue.js and Python.",
      },
    ],
    education: [
      {
        institution: "University of Technology",
        degree: "Bachelor of Science in Computer Science",
        year: "2018",
      },
    ],
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "Git"],
  };

  const handleDownload = () => {
    // Replace with your actual resume file path or API endpoint
    const resumeUrl = "/path-to-your-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "YourName_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box bg={bgColor} minHeight="100vh" py={12}>
      <Container maxWidth="800px">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl" textAlign="center">
            My Resume
          </Heading>

          <Box bg={cardBgColor} borderRadius="lg" boxShadow="md" p={6}>
            <ResumePreview {...resumeData} />
          </Box>

          <Box textAlign="center">
            <Button
              leftIcon={<DownloadIcon />}
              colorScheme="blue"
              size="lg"
              onClick={handleDownload}
            >
              Download Resume
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}