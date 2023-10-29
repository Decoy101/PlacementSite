import { memo } from "react";

import { Avatar } from "@mantine/core";

import AvatarColor from "./AvatarColor";
import { AvatarImageProps } from "./AvatarImage.types";

function AvatarImage({
  alt,
  bgColor,
  src,
  radius = "xl",
  size = 30,
  fallback,
}: AvatarImageProps) {
  if (src) {
    return <Avatar src={src} size={size} radius={radius} />;
  }

  return (
    <AvatarColor
      size={size}
      radius={radius}
      alt={alt}
      bgColor={bgColor}
      fallback={fallback}
    ></AvatarColor>
  );
}

export default memo(AvatarImage);
