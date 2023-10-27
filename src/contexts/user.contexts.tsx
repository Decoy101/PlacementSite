import { onAuthStateChangeListener } from "@/firebase";
import { IUser } from "@/projectX-sdk";
import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface UserContextProps {
  currentUser: IUser;
  setCurrentUser: Dispatch<SetStateAction<IUser>>;
}
export const UserContext = createContext<UserContextProps>({
  currentUser: {
    name: "",
    email: "",
  },
  setCurrentUser: () => {},
});
export type UserProviderProps = {
  children: ReactNode;
};
export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<IUser>({
    name: "",
    email: "",
  });
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user: IUser) =>
      setCurrentUser(user)
    );

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
