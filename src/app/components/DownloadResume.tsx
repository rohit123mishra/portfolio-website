"use client";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const DownloadResume = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/path-to-your-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "YourName_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button leftIcon={<DownloadIcon />} colorScheme="green" onClick={handleDownload}>
      Download Resume
    </Button>
  );
};

export default DownloadResume;