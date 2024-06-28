"use client";
import { useState } from "react";
import { Box, Heading, VStack, Input, Button, useToast, Flex, Text, Icon } from "@chakra-ui/react";
import { FiUpload, FiDownload, FiFile } from "react-icons/fi";
import ResumePreview from "@/app/components/ResumePreview";

interface ResumeData {
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

export default function ManageResume() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const toast = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsedData = JSON.parse(content) as ResumeData;
        setResumeData(parsedData);
        toast({
          title: "Resume uploaded successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Error parsing file:", error);
        toast({
          title: "Error parsing file",
          description: "Please make sure you're uploading a valid JSON file",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    reader.readAsText(file);
  };

  const handleDownload = () => {
    if (!resumeData) {
      toast({
        title: "No resume data to download",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const dataStr = JSON.stringify(resumeData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'resume.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading mb={6}>Manage Resume</Heading>
      <Flex justifyContent="space-between" mb={6}>
        <Button leftIcon={<FiDownload />} colorScheme="green" onClick={handleDownload} isDisabled={!resumeData}>
          Download Resume
        </Button>
        <Input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          display="none"
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <Button as="span" leftIcon={<FiUpload />} colorScheme="blue">
            Select File
          </Button>
        </label>
        <Button onClick={handleUpload} colorScheme="purple" isDisabled={!file}>
          Upload Resume
        </Button>
      </Flex>

      {resumeData ? (
        <ResumePreview {...resumeData} />
      ) : (
        <Box borderWidth={1} borderRadius="lg" p={6} bg="gray.50">
          <Flex direction="column" alignItems="center" justifyContent="center" height="500px">
            <Icon as={FiFile} w={20} h={20} color="gray.300" />
            <Text mt={4} fontSize="xl" color="gray.500">No resume uploaded</Text>
            <Text fontSize="sm" color="gray.400">Upload a JSON file to view your resume</Text>
          </Flex>
        </Box>
      )}
    </Box>
  );
}