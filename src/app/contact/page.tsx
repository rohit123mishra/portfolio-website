"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const isNameError = name === "";
  const isEmailError = email === "" || !email.includes("@");
  const isMessageError = message === "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNameError || isEmailError || isMessageError) {
      toast({
        title: "Error",
        description: "Please fill all fields correctly.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent",
        description: "Thanks for contacting me! I'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" mb={6}>
        Contact Me
      </Heading>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <FormControl isInvalid={isNameError} isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
          {isNameError && <FormErrorMessage>Name is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={isEmailError} isRequired>
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" type="email" />
          {isEmailError && <FormErrorMessage>Valid email is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={isMessageError} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" />
          {isMessageError && <FormErrorMessage>Message is required.</FormErrorMessage>}
        </FormControl>
        <Button colorScheme="blue" type="submit" isLoading={isLoading} loadingText="Sending">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}