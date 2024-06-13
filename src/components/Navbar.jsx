import { Box, Flex, Link, Spacer, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex align="center">
        <Box>
          <Link href="/" fontSize="2xl" fontWeight="bold" color="gold">Logo</Link>
        </Box>
        <Spacer />
        <Box>
          <InputGroup>
            <Input placeholder="Search" />
            <InputRightElement children={<Button size="sm"><SearchIcon /></Button>} />
          </InputGroup>
        </Box>
      </Flex>
      <Flex mt={2} justify="center">
        <Link href="/channel1" mx={2} color="gold">Channel 1</Link>
        <Link href="/channel2" mx={2} color="gold">Channel 2</Link>
        <Link href="/channel3" mx={2} color="gold">Channel 3</Link>
        <Link href="/channel4" mx={2} color="gold">Channel 4</Link>
        <Link href="/channel5" mx={2} color="gold">Channel 5</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;