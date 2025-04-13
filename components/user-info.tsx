"use client";

import { useAuth } from "@/context/auth-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const UserInfo: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const isLandingPage = window.location.pathname === "/";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>{user.email ?? user.phone}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user.email ?? user.phone}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isLandingPage && (
          <DropdownMenuItem>
            <a href="/dashboard">Go to Dashboard</a>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={logout} className="cursor-pointer">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserInfo;
