import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Copy } from "lucide-react"

export default function FacebookIntegrationPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Facebook Messenger Integration</CardTitle>
        <CardDescription>Connect your Facebook page to provide automated responses through Messenger.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Connection Status</Label>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Not Connected
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="page-id">Facebook Page ID</Label>
          <Input id="page-id" placeholder="Enter your Facebook Page ID" />
          <p className="text-xs text-muted-foreground">You can find your Page ID in your Facebook Page settings.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="page-access-token">Page Access Token</Label>
          <Input id="page-access-token" type="password" placeholder="Enter your Page Access Token" />
          <p className="text-xs text-muted-foreground">Generate a Page Access Token from Facebook Developer Console.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="verify-token">Verify Token</Label>
          <Input id="verify-token" placeholder="Create a unique verify token" defaultValue="saleai-fb-verify-token" />
          <p className="text-xs text-muted-foreground">
            You'll need this token when setting up the webhook in Facebook Developer Console.
          </p>
        </div>

        <div className="space-y-2">
          <Label>Webhook URL</Label>
          <div className="flex gap-2">
            <Input readOnly value="https://api.saleai.com/webhook/facebook/YOUR_API_KEY" className="bg-muted" />
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy webhook URL</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Use this URL when configuring your webhook in Facebook Developer Console.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Setup Guide</Button>
        <Button>Connect Facebook Page</Button>
      </CardFooter>
    </Card>
  )
}
