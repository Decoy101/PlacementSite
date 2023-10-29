import { NavbarFooterProps } from "./NavbarFooter/NavbarFooter.types";
import { AsideLinksProps } from "./NavbarAside/NavbarAside.types";
export type NavbarProps = {
  hidden: boolean;
  links: AsideLinksProps[];
  // headerData?: NavbarHeaderDataProps
  showSwitcher: boolean;
  activeAsideLinkId: string;
  activeLinkId: string;
  rightPanelTitle: string;
  rightPanelTitleIcon: string;
  onBackAsideFullWidth: () => void;
  onRemoveRightPanel: () => void;
  footerMenu: NavbarFooterProps;
};
