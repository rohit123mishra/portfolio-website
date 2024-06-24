"use client";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const blogPosts = {
  1: {
    title: "Getting Started with Next.js",
    content: "This is the full content of the Next.js blog post...",
    date: "2023-06-01",
  },
  2: {
    title: "Mastering Chakra UI",
    content: "This is the full content of the Chakra UI blog post...",
    date: "2023-06-15",
  },
  // Add more blog posts as needed
};

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogPosts[postId];

  if (!post) {
    return <Box>Post not found</Box>;
  }

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          {post.title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Published on {post.date}
        </Text>
        <Text>{post.content}</Text>
      </VStack>
    </Box>
  );
}