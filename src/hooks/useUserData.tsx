import { useContext, createContext } from 'react';

interface UserDataProps {
  children: React.ReactNode;
}

type UserDataContextType = {
  userData: {
    name: string;
  };
};

const UserDataContext = createContext({} as UserDataContextType);

export function UserDataContextProvider({ children }: UserDataProps) {
  const userData = {
    name: 'Marlon Brando'
  };

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export const useUserData = () => useContext(UserDataContext);
