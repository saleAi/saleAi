import Link from "next/link"
import { FileText, MessageSquare, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Queries</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automated Responses</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <p className="text-xs text-muted-foreground">77% automation rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Link href="/dashboard/documents" className="text-sm text-blue-600 hover:underline">
              Upload new documents
            </Link>
            <Link href="/dashboard/chat-simulator" className="text-sm text-blue-600 hover:underline">
              Test your chatbot
            </Link>
            <Link href="/dashboard/integrations" className="text-sm text-blue-600 hover:underline">
              Set up website integration
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Document uploaded: Product Manual v2.0.pdf</span>
                <span className="text-muted-foreground">2h ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Knowledge base updated</span>
                <span className="text-muted-foreground">5h ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>New user registered</span>
                <span className="text-muted-foreground">Yesterday</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>API Status</span>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Chat Widget</span>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Document Processing</span>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
