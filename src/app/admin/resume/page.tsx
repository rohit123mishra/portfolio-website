"use client";
import { useState } from "react";
import { Box, Heading, VStack, Input, Button, useToast } from "@chakra-ui/react";

export default function ManageResume() {
  const [file, setFile] = useState<File | null>(null);
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

    // Here you would typically send the file to your backend
    console.log("Uploading file:", file.name);
    toast({
      title: "Resume uploaded",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFile(null);
  };

  return (
    <Box>
      <Heading mb={6}>Manage Resume</Heading>
      <VStack spacing={4} align="stretch">
        <Input type="file" onChange={handleFileChange} />
        <Button onClick={handleUpload} colorScheme="blue" isDisabled={!file}>
          Upload Resume
        </Button>
      </VStack>
    </Box>
  );
}