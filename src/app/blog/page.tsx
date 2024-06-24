"use client";
import { Box, Heading, VStack, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    date: "2023-06-01",
  },
  {
    id: 2,
    title: "Mastering Chakra UI",
    excerpt: "Discover the power of Chakra UI for building beautiful React applications",
    date: "2023-06-15",
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" mb={6}>
        Blog
      </Heading>
      <VStack spacing={8} align="stretch">
        {blogPosts.map((post) => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="lg" mb={2}>
              <Link as={NextLink} href={`/blog/${post.id}`} color="blue.500">
                {post.title}
              </Link>
            </Heading>
            <Text mb={3}>{post.excerpt}</Text>
            <Text fontSize="sm" color="gray.500">
              Published on {post.date}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}