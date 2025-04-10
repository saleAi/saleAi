import type React from "react"
import { IntegrationsNav } from "@/components/integrations-nav"

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Chat Platform Integrations</h1>
      <IntegrationsNav />
      {children}
    </>
  )
}
