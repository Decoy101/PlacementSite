import { Flex, Skeleton } from "@mantine/core";

function NavbarFooterSkeleton() {
  return (
    <Flex align="center" sx={{ flex: 1, width: "100%" }}>
      <Skeleton width={40} height={40} circle />
      <Flex direction="column" sx={{ flex: 1 }} pl="md">
        <Skeleton width="80%" height={10} mb="xs" />
        <Skeleton width="70%" height={10} />
      </Flex>
      <Skeleton width={24} height={24} circle />
    </Flex>
  );
}

export default NavbarFooterSkeleton;
