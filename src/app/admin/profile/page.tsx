"use client";
import { useState } from "react";
import { Box, Heading, VStack, Input, Textarea, Button, useToast } from "@chakra-ui/react";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ name, bio, email });
    toast({
      title: "Profile updated",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Heading mb={6}>Edit Profile</Heading>
      <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
        <Input 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Textarea 
          placeholder="Bio" 
          value={bio} 
          onChange={(e) => setBio(e.target.value)} 
        />
        <Input 
          placeholder="Email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Button type="submit" colorScheme="blue">Update Profile</Button>
      </VStack>
    </Box>
  );
}