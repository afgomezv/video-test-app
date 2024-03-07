import { FC, ReactNode, createContext } from "react";

interface IAuthContext {
  login: boolean;
}

interface Props {
  children: ReactNode;
}

export const authContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC<Props> = ({ children }) => {
  const user: IAuthContext = {
    login: true,
  };

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};
