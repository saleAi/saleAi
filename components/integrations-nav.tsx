"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Globe, MessageSquare, Server } from "lucide-react"

export function IntegrationsNav() {
  const pathname = usePathname()

  const tabs = [
    {
      name: "Website Widget",
      href: "/dashboard/integrations/widget",
      icon: <Globe className="h-4 w-4 mr-2" />,
    },
    {
      name: "Facebook",
      href: "/dashboard/integrations/facebook",
      icon: <Facebook className="h-4 w-4 mr-2" />,
    },
    {
      name: "Telegram",
      href: "/dashboard/integrations/telegram",
      icon: <MessageSquare className="h-4 w-4 mr-2" />,
    },
    {
      name: "Zalo",
      href: "/dashboard/integrations/zalo",
      icon: <MessageSquare className="h-4 w-4 mr-2" />,
    },
    {
      name: "API",
      href: "/dashboard/integrations/api",
      icon: <Server className="h-4 w-4 mr-2" />,
    },
  ]

  return (
    <div className="flex overflow-x-auto border-b mb-6">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`flex items-center px-4 py-2 text-sm font-medium whitespace-nowrap ${
            pathname === tab.href
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.icon}
          {tab.name}
        </Link>
      ))}
    </div>
  )
}
