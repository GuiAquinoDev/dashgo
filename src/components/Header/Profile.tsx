import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme Aquino</Text>
          <Text color="gray.300" fontSize="small">
            guilherme_aquino92@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Guilherme Aquino" />
    </Flex>
  );
}
