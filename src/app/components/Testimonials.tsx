"use client";
import { Box, Heading, Text, VStack, HStack, Avatar, useColorModeValue } from "@chakra-ui/react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "Working with [Your Name] was a great experience. They delivered high-quality work on time.",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "Designer, CreativeCo",
    content: "[Your Name] is a talented developer who brings creative solutions to complex problems.",
    avatar: "https://via.placeholder.com/150",
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ name, role, content, avatar }) => {
  const bgColor = useColorModeValue("white", "gray.700");

  return (
    <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="md" maxW="400px">
      <VStack spacing={4} align="start">
        <Text fontSize="md" fontStyle="italic">
          "{content}"
        </Text>
        <HStack spacing={4}>
          <Avatar src={avatar} name={name} />
          <Box>
            <Text fontWeight="bold">{name}</Text>
            <Text fontSize="sm" color="gray.500">
              {role}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Box py={16}>
      <VStack spacing={12}>
        <Heading as="h2" size="xl">
          What People Say
        </Heading>
        <HStack spacing={8} flexWrap="wrap" justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Testimonials;