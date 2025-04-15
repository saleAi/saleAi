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
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserInfoDropdown: React.FC = () => {
  const { user, logout } = useAuth();

  const pathname = usePathname();

  if (!user) {
    return null;
  }

  const isLandingPage = pathname === "/";

  console.log("User Info Dropdown", isLandingPage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{user.email ?? user.phone}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user.email ?? user.phone}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isLandingPage && (
          <DropdownMenuItem>
            <Link className="w-full" href="/dashboard">
              Go to Dashboard
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={logout} className="cursor-pointer">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserInfoDropdown;
