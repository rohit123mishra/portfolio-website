"use client";
import { useState } from "react";
import { Box, Heading, VStack, Input, Textarea, Button, useToast } from "@chakra-ui/react";

export default function ManageProjects() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ title, description, imageUrl });
    toast({
      title: "Project added",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <Box>
      <Heading mb={6}>Manage Projects</Heading>
      <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
        <Input 
          placeholder="Project Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <Textarea 
          placeholder="Project Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <Input 
          placeholder="Image URL" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
        />
        <Button type="submit" colorScheme="blue">Add Project</Button>
      </VStack>
    </Box>
  );
}