import { atom } from "jotai";

const isNavbarOpened = atom<boolean>(false);
const isAsideFullWidth = atom<boolean>(true);
const isLoadingNavbarAtom = atom<boolean>(false);

export const navStore = {
  isNavbarOpened,
  isAsideFullWidth,
  isLoadingNavbarAtom,
};
