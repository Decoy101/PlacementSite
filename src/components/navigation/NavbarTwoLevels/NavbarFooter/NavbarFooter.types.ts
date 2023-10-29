import { ReactNode } from "react";
import { IAvatar } from "@/projectX-sdk";

export interface NavbarFooterProps {
  name: string;
  email: string;
  avatar?: IAvatar;
  menu: ReactNode;
}
