import { Container, Box, Flex } from "@chakra-ui/react";
import BannerSlider from "../components/BannerSlider";
import EditorsChoice from "../components/EditorsChoice";
import RecentNews from "../components/RecentNews";
import AdditionalContent from "../components/AdditionalContent";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#f6f6f6" p={4}>
      <BannerSlider />
      <Flex mt={4}>
        <Box flex="1" mr={4}>
          <EditorsChoice />
        </Box>
        <Box flex="0.5" mr={4}>
          <RecentNews />
        </Box>
        <Box flex="0.5">
          <AdditionalContent />
        </Box>
      </Flex>
      <Flex mt={4}>
        <Box flex="1" mr={4}>
          <AdditionalContent />
        </Box>
        <Box flex="1" mr={4}>
          <AdditionalContent />
        </Box>
        <Box flex="1">
          <AdditionalContent />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;