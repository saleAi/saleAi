import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Copy } from "lucide-react"

export default function ApiIntegrationPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Integration</CardTitle>
        <CardDescription>Integrate our AI directly into your own applications using our REST API.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Your API Key</Label>
          <div className="flex gap-2">
            <Input readOnly value="sk_live_saleai_01HXYZ123456789ABCDEFGHIJK" className="bg-muted font-mono" />
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy API Key</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Keep this key secret. Do not share it in public repositories or client-side code.
          </p>
        </div>

        <div className="space-y-2">
          <Label>API Base URL</Label>
          <div className="flex gap-2">
            <Input readOnly value="https://api.saleai.com/v1" className="bg-muted" />
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy API URL</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Rate Limits</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded-md">
              <div className="text-sm font-medium">Requests per minute</div>
              <div className="text-2xl font-bold mt-1">60</div>
            </div>
            <div className="p-3 border rounded-md">
              <div className="text-sm font-medium">Tokens per day</div>
              <div className="text-2xl font-bold mt-1">100,000</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Example Request</Label>
          <Textarea
            readOnly
            className="bg-muted font-mono text-sm h-32"
            value={`curl -X POST https://api.saleai.com/v1/chat \\
  -H "Authorization: Bearer sk_live_saleai_01HXYZ123456789ABCDEFGHIJK" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "What are your shipping options?",
    "conversation_id": "conv_123456789"
  }'`}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View API Documentation</Button>
        <Button>Generate New API Key</Button>
      </CardFooter>
    </Card>
  )
}
