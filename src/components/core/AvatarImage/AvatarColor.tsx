import { memo, useMemo } from "react";

import { Avatar } from "@mantine/core";

import { AvatarColorProps } from "./AvatarImage.types";

export function stringToHslColor(str: string, s: number, l: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function AvatarColor({
  alt,
  bgColor,
  radius = "xl",
  size = 30,
  fallback,
}: AvatarColorProps) {
  const bgColorByString = useMemo(() => stringToHslColor(alt, 100, 54), [alt]);

  const initials = useMemo(() => {
    let result = alt.slice(0, 1);
    const words = alt.split(" ");
    if (words.length > 1) {
      result += words[words.length - 1].substring(0, 1);
    }
    return result.toUpperCase();
  }, [alt]);

  return (
    <Avatar
      size={size}
      radius={radius}
      sx={{ backgroundColor: bgColor || bgColorByString }}
    >
      {fallback ? fallback : initials}
    </Avatar>
  );
}

export default memo(AvatarColor);
