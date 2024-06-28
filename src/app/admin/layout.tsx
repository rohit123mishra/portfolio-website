"use client";
import { useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual auth logic
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!isAuthenticated) {
    return <AdminLogin setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <Flex>
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Box 
        ml={{ base: 0, md: isSidebarOpen ? "280px" : "80px" }} 
        transition="margin-left 0.3s ease"
        w="full"
        p="4"
      >
        {children}
      </Box>
    </Flex>
  );
}

// Placeholder login component
function AdminLogin({ setIsAuthenticated }) {
  // Implement actual login logic here
  return (
    <Box p={8}>
      <Button onClick={() => setIsAuthenticated(true)}>Login as Admin</Button>
    </Box>
  );
}