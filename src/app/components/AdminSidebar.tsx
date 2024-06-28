"use client";
import { Box, VStack, Link, Flex, Icon, Heading, useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiHome, FiFolder, FiFileText, FiUser, FiLogOut, FiMenu, FiChevronLeft } from "react-icons/fi";

const SidebarItem = ({ icon, children, href, isOpen }) => {
  const { colorMode } = useColorMode();
  return (
    <Tooltip label={children} placement="right" isDisabled={isOpen}>
      <Link as={NextLink} href={href} _hover={{ textDecoration: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: colorMode === 'light' ? 'cyan.100' : 'cyan.900',
            color: colorMode === 'light' ? 'cyan.700' : 'cyan.200',
          }}
          transition="all 0.3s"
        >
          <Icon
            mr={isOpen ? "4" : "0"}
            fontSize="20"
            _groupHover={{
              color: colorMode === 'light' ? 'cyan.600' : 'cyan.300',
            }}
            as={icon}
          />
          {isOpen && children}
        </Flex>
      </Link>
    </Tooltip>
  );
};

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const { colorMode } = useColorMode();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Box
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      borderRight="1px"
      borderRightColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
      w={isOpen ? { base: 'full', md: '280px' } : '80px'}
      pos="fixed"
      h="calc(80vh - 64px )"
      marginTop="0px"
      left="0"
      zIndex="sticky"
      overflowX="hidden"
      overflowY="auto"
      transition="all 0.3s ease"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: colorMode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
          borderRadius: '24px',
        },
      }}
    >
      <Flex h="20" alignItems="center" mx={isOpen ? "8" : "0"} justifyContent={isOpen ? "space-between" : "center"}>
        {isOpen && (
          <Heading as="h1" fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={colorMode === 'light' ? 'cyan.600' : 'cyan.300'}>
            Admin Panel
          </Heading>
        )}
        <IconButton
          aria-label="Toggle Sidebar"
          icon={isOpen ? <FiChevronLeft /> : <FiMenu />}
          onClick={toggleSidebar}
          variant="ghost"
          size="lg"
          _hover={{
            bg: colorMode === 'light' ? 'cyan.100' : 'cyan.900',
            color: colorMode === 'light' ? 'cyan.600' : 'cyan.300',
          }}
        />
      </Flex>
      <VStack align="stretch" spacing={2} mt={6}>
        <SidebarItem icon={FiHome} href="/admin/dashboard" isOpen={isOpen}>
          Dashboard
        </SidebarItem>
        <SidebarItem icon={FiFolder} href="/admin/projects" isOpen={isOpen}>
          Manage Projects
        </SidebarItem>
        <SidebarItem icon={FiFileText} href="/admin/resume" isOpen={isOpen}>
          Manage Resume
        </SidebarItem>
        <SidebarItem icon={FiUser} href="/admin/profile" isOpen={isOpen}>
          Edit Profile
        </SidebarItem>
      </VStack>
      <Flex
        position="absolute"
        bottom="5"
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <SidebarItem icon={FiLogOut} href="/logout" isOpen={isOpen}>
          Logout
        </SidebarItem>
      </Flex>
    </Box>
  );
};

export default AdminSidebar;