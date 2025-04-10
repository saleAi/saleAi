import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Copy } from "lucide-react"

export default function ZaloIntegrationPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Zalo OA Integration</CardTitle>
        <CardDescription>Connect your Zalo Official Account to provide automated responses.</CardDescription>
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
          <Label htmlFor="oa-id">Zalo OA ID</Label>
          <Input id="oa-id" placeholder="Enter your Zalo OA ID" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="app-id">App ID</Label>
          <Input id="app-id" placeholder="Enter your Zalo App ID" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="secret-key">Secret Key</Label>
          <Input id="secret-key" type="password" placeholder="Enter your Secret Key" />
        </div>

        <div className="space-y-2">
          <Label>Webhook URL</Label>
          <div className="flex gap-2">
            <Input readOnly value="https://api.saleai.com/webhook/zalo/YOUR_API_KEY" className="bg-muted" />
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy webhook URL</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Use this URL when configuring your webhook in Zalo Developer Console.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Setup Guide</Button>
        <Button>Connect Zalo OA</Button>
      </CardFooter>
    </Card>
  )
}
