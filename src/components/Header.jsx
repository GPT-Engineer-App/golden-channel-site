import { Box, Flex, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex align="center" justify="space-between">
        <Box>
          <Image src="/path/to/logo.png" alt="Logo" />
        </Box>
        <Box>
          <Image src="/path/to/ad-space.png" alt="Ad Space" width="660px" height="100px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;