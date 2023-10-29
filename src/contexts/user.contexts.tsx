import { IAccount } from "@/projectX-sdk";
import {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface UserContextProps {
  currentUser: IAccount;
  setCurrentUser: Dispatch<SetStateAction<IAccount>>;
}
export const UserContext = createContext<UserContextProps>({
  currentUser: {
    email: "",
  },
  setCurrentUser: () => {},
});
export type UserProviderProps = {
  children: ReactNode;
};
export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<IAccount>({
    email: "",
  });
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUserContext() {
  return useContext(UserContext);
}
