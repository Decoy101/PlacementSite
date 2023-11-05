import { useEffect, useRef, useState } from "react";

import { Group, Box, UnstyledButton, Tooltip } from "@mantine/core";

import { LinksGroupProps } from "./NavbarLink.types";
import { useStyles } from "./NavbarLink.styles";

export function LinksGroup({
  icon,
  label,
  image,
  width,
  handleClick,
  isActive = false,
  onlyIcon = false,
  closeNavbarOnClick = false,
}: LinksGroupProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  // const setNavbarOpened = useSetAtom(navbarStore.isNavbarOpened)
  const { classes, cx } = useStyles({ onlyIcon, width });

  useEffect(() => {
    if (boxRef.current && width) {
      setShowTooltip(
        onlyIcon || boxRef?.current?.offsetWidth === (width || 0) - 75
      );
    } else {
      setShowTooltip(onlyIcon);
    }
  }, [boxRef, width, setShowTooltip, onlyIcon]);

  return (
    <Tooltip
      sx={{ position: "fixed" }}
      withArrow
      arrowSize={6}
      events={{
        hover: showTooltip,
        focus: onlyIcon,
        touch: onlyIcon,
      }}
      label={label}
    >
      <UnstyledButton
        onClick={() => {
          if (handleClick) handleClick();
        }}
        className={cx(classes.control, {
          [classes.active]: isActive,
        })}
      >
        <Group
          position="apart"
          spacing={0}
          sx={{ justifyContent: onlyIcon ? "center" : "space-between" }}
        >
          <Box className={classes.linkContainer}>
            {image && !showFallback ? (
              <img
                src={image}
                alt={label}
                className={classes.imgIcon}
                onError={() => {
                  setShowFallback(true);
                }}
              />
            ) : (
              icon
            )}
            {!onlyIcon && (
              <Box ml="sm" ref={boxRef} className={classes.truncate}>
                {label}
              </Box>
            )}
          </Box>
        </Group>
      </UnstyledButton>
    </Tooltip>
  );
}
