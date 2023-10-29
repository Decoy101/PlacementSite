import { ReactNode } from "react";

export interface LinksGroupProps {
  icon: ReactNode;
  label: string;
  image?: string;
  width?: number;
  handleClick?: () => void;
  isActive?: boolean;
  onlyIcon?: boolean;
  closeNavbarOnClick?: boolean;
}
