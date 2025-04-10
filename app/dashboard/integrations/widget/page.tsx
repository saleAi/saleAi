import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Copy, MessageSquare } from "lucide-react"

export default function WidgetIntegrationPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Website Chat Widget</CardTitle>
          <CardDescription>
            Add a customizable chat widget to your website to provide instant AI support to your customers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="widget-name">Widget Name</Label>
              <Input id="widget-name" placeholder="Main Website Support" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="widget-color">Primary Color</Label>
              <div className="flex gap-2">
                <Input id="widget-color" type="color" defaultValue="#7C3AED" className="w-16 p-1 h-10" />
                <Input defaultValue="#7C3AED" className="flex-1" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="welcome-message">Welcome Message</Label>
            <Textarea
              id="welcome-message"
              placeholder="Hello! How can I help you today?"
              defaultValue="Hello! I'm your AI sales assistant. How can I help you today?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="auto-show" defaultChecked />
              <Label htmlFor="auto-show">Auto-show after 30 seconds</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="mobile-friendly" defaultChecked />
              <Label htmlFor="mobile-friendly">Mobile-friendly mode</Label>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <Label>Installation Code</Label>
            <div className="relative">
              <Textarea
                readOnly
                className="bg-muted font-mono text-sm pr-12"
                value="<script src='https://cdn.saleai.com/widget.js' data-api-key='YOUR_API_KEY'></script>"
              />
              <Button variant="ghost" size="icon" className="absolute right-2 top-2">
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy code</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Add this code to your website's HTML, just before the closing &lt;/body&gt; tag.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Widget Preview</CardTitle>
          <CardDescription>This is how your chat widget will appear on your website.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center p-6">
          <div className="border rounded-lg shadow-lg w-[300px] h-[400px] relative bg-white">
            <div className="bg-primary p-3 rounded-t-lg text-white">
              <div className="font-medium">Sales Support</div>
            </div>
            <div className="p-3 h-[300px] overflow-y-auto border-b">
              <div className="flex flex-col gap-3">
                <div className="bg-muted p-2 rounded-lg max-w-[80%]">
                  <p className="text-sm">Hello! I'm your AI sales assistant. How can I help you today?</p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="text-sm" />
                <Button size="sm" className="shrink-0">
                  Send
                </Button>
              </div>
            </div>
            <div className="absolute bottom-[-50px] right-0">
              <div className="bg-primary text-white rounded-full p-3 shadow-md">
                <MessageSquare className="h-6 w-6" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
