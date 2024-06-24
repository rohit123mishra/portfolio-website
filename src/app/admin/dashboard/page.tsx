"use client";
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Mock data for the chart
const data = [
  { name: 'Jan', views: 4000, downloads: 2400 },
  { name: 'Feb', views: 3000, downloads: 1398 },
  { name: 'Mar', views: 2000, downloads: 9800 },
  { name: 'Apr', views: 2780, downloads: 3908 },
  { name: 'May', views: 1890, downloads: 4800 },
  { name: 'Jun', views: 2390, downloads: 3800 },
];

export default function AdminDashboard() {
  return (
    <Box>
      <Heading mb={6}>Admin Dashboard</Heading>
      <SimpleGrid columns={2} spacing={10} mb={10}>
        <Stat>
          <StatLabel>Total Profile Views</StatLabel>
          <StatNumber>45,670</StatNumber>
          <StatHelpText>Feb 1 - Apr 1</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Resume Downloads</StatLabel>
          <StatNumber>1,234</StatNumber>
          <StatHelpText>Feb 1 - Apr 1</StatHelpText>
        </Stat>
      </SimpleGrid>
      <Box>
        <Heading size="md" mb={4}>Profile Views and Resume Downloads</Heading>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="views" stroke="#8884d8" />
          <Line type="monotone" dataKey="downloads" stroke="#82ca9d" />
        </LineChart>
      </Box>
    </Box>
  );
}