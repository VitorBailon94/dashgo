import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vitor Bailon</Text>
          <Text color="gray.300" fontSize="small">vitor.carulla@gmail</Text>
        </Box>
      )}

      <Avatar size="md" name="Vitor Bailon" src="https://github.com/vitorbailon94.png" />
    </Flex>
  );
}