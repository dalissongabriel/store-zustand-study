import { useGlobalStore } from "@/store";
import { HTMLAttributes, PropsWithChildren, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isPrivatePage?: boolean;
  pageTitle?: string;
}

export default function Page({
  isPrivatePage = false,
  pageTitle = "",
  children,
  ...rest
}: PropsWithChildren<Props>) {
  const navigate = useNavigate();
  const logout = useGlobalStore((state) => state.logout);
  const user = useGlobalStore((state) => state.user);

  const handleLogout = useCallback(async () => {
    if (user && user.email) {
      await logout({ email: user.email });
    }

    navigate("/");
  }, [user]);

  return (
    <div {...rest} className="w-full min-h-screen bg-slate-200 p-6">
      {isPrivatePage && (
        <div className="w-full h-20 bg-slate-700 text-white flex items-center justify-between p-2">
          <p className="text-2xl">{pageTitle}</p>
          <div className="flex gap-4">
            <p className="text-white">{user.email}</p>
            <button
              className="bg-red-600 p-2 rounded-sm uppercase"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
