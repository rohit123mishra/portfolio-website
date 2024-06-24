"use client";
import { Box, VStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const AdminSidebar = () => {
  return (
    <Box width="250px" bg="gray.100" height="100vh" p={4}>
      <VStack align="stretch" spacing={4}>
        <Link as={NextLink} href="/admin/dashboard">Dashboard</Link>
        <Link as={NextLink} href="/admin/projects">Manage Projects</Link>
        <Link as={NextLink} href="/admin/resume">Manage Resume</Link>
        <Link as={NextLink} href="/admin/profile">Edit Profile</Link>
      </VStack>
    </Box>
  );
};

export default AdminSidebar;