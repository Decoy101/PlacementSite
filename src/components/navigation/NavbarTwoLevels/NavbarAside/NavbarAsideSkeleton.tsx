import { Skeleton, Flex } from "@mantine/core";

function NavbarAsideSkeleton() {
  return (
    <>
      <Flex sx={{ width: "100%" }} direction="column">
        <Skeleton width="30%" mt="xl" height={14} />
        <Skeleton width="90%" mt="sm" height={24} />
        <Skeleton width="90%" mt="sm" height={24} />
        <Skeleton width="90%" mt="sm" height={24} />
      </Flex>
      <Flex sx={{ width: "100%" }} direction="column">
        <Skeleton width="30%" mt="xl" height={14} />
        <Skeleton width="90%" mt="sm" height={24} />
        <Skeleton width="90%" mt="sm" height={24} />
        <Skeleton width="90%" mt="sm" height={24} />
      </Flex>
    </>
  );
}

export default NavbarAsideSkeleton;
