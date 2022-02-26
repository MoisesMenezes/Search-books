import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="white"
      h="50px"
      p="0.5rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexShrink="0"
    >
      <Text fontWeight="bold" color="purple.500">
        Development by Moisés Menezes
      </Text>
    </Box>
  );
};

export default Footer;
