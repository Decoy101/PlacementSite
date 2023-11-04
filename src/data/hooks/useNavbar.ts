import { useSetAtom } from "jotai";
import { navStore } from "../store/navbar.store";

export function useNavbar() {
  const setIsAsideFullWidth = useSetAtom(navStore.isAsideFullWidth);
  const setIsLoadingNavbar = useSetAtom(navStore.isLoadingNavbarAtom);
  const setIsNavbarOpened = useSetAtom(navStore.isNavbarOpened);
  return {
    setIsAsideFullWidth,
    setIsLoadingNavbar,
    setIsNavbarOpened,
  };
}
