import { MantineNumberSize } from "@mantine/styles";

export type AvatarImageProps = {
  alt: string;
  src?: string;
  size?: number;
  radius?: MantineNumberSize;
  bgColor?: string;
  fallback?: React.ReactNode;
};

export type AvatarColorProps = Omit<AvatarImageProps, "src">;
