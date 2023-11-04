import { Modal, Button, Grid, Image, Paper, Flex, Text } from "@mantine/core";
import { EditProfile } from "./EditProfile";
import { useDisclosure } from "@mantine/hooks";
import { ViewProfile } from "./ViewProfile";

function Profile() {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <Modal size="65%" opened={opened} onClose={close} centered>
        <EditProfile />
      </Modal>

      <Grid>
        <Grid.Col span={9}>
          <ViewProfile />
        </Grid.Col>
        <Grid.Col span={3}>
          <Paper shadow="xs" radius="xs" p="xl">
            <Flex direction={"column"}>
              <Image
                h={300}
                w="auto"
                src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
              />
              <Text ta={"center"}>Aman Gupta</Text>
              <Text ta={"center"}>B.Tech 2024</Text>
              <Button onClick={open}>Edit profile</Button>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Profile;
