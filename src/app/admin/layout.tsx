"use client";
import { useState } from "react";
import { Box, Flex ,Button} from "@chakra-ui/react";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual auth logic

  if (!isAuthenticated) {
    return <AdminLogin setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <Flex>
      <AdminSidebar />
      <Box flex={1} p={8}>
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