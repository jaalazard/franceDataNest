import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AuthProviderState, User } from "../../../types/src/index";
import { useLocation } from "react-router-dom";

const AuthProviderContext = createContext<AuthProviderState | undefined>(
  undefined
);

export function AuthProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [user, setUser] = useState({} as User);  
  const location = useLocation();
  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      const res = await fetch("http://localhost:3000/auth/check", {
        credentials: "include",
        headers: {
          "Cache-Control": "no-cache",
        },
        signal: abortController.signal,
      });
      const data = await res.json() as {
        isLoggedIn: boolean;
        user: User | null;
      };
      
      setIsLoggedIn(data.isLoggedIn);
      setUser(data.user);
    })();
  }, [location]);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      user,
      setUser,
    }),
    [isLoggedIn, setIsLoggedIn, user, setUser]
  );

  return (
    <AuthProviderContext.Provider value={value} {...props}>
      {children}
    </AuthProviderContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthProviderContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};