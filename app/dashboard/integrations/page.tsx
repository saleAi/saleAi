import { redirect } from "next/navigation"

export default function IntegrationsPage() {
  // Redirect to the widget page by default
  redirect("/dashboard/integrations/widget")
}
