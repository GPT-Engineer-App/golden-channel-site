import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="white" p={4} boxShadow="md" mt={4}>
      <Flex justify="space-between" align="center">
        <Box>
          <Link href="/contact" mx={2} color="gold">Contact</Link>
          <Link href="/about" mx={2} color="gold">About</Link>
          <Link href="/privacy" mx={2} color="gold">Privacy Policy</Link>
        </Box>
        <Box>
          <FaFacebook color="gold" mx={2} />
          <FaTwitter color="gold" mx={2} />
          <FaInstagram color="gold" mx={2} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;