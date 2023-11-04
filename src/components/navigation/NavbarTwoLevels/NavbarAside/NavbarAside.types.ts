import { NavbarFooterProps } from "../NavbarFooter/NavbarFooter.types";
import { ReactNode } from "react";
export type NavbarAsideProps = {
  // headerData?: NavbarHeaderDataProps
  isSliding: boolean;
  footerMenu: NavbarFooterProps;
};

export type AsideLinksProps = {
  id: string;
  icon: ReactNode;
  image?: string;
  label: string;
  onClick?: () => void;
  onClickUrl?: string;
  onHover?: (isMobile: boolean) => void;
};
