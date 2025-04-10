"use client"

import { useState } from "react"
import { Check, Copy, Facebook, Globe, MessageSquare, Server } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function ChatIntegrations() {
  const [copied, setCopied] = useState(false)

  const handleCopyClick = () => {
    navigator.clipboard.writeText(
      "<script src='https://cdn.saleai.com/widget.js' data-api-key='YOUR_API_KEY'></script>",
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="widget" className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="widget">
            <Globe className="h-4 w-4 mr-2" />
            Website Widget
          </TabsTrigger>
          <TabsTrigger value="facebook">
            <Facebook className="h-4 w-4 mr-2" />
            Facebook
          </TabsTrigger>
          <TabsTrigger value="telegram">
            <MessageSquare className="h-4 w-4 mr-2" />
            Telegram
          </TabsTrigger>
          <TabsTrigger value="zalo">
            <MessageSquare className="h-4 w-4 mr-2" />
            Zalo
          </TabsTrigger>
          <TabsTrigger value="api">
            <Server className="h-4 w-4 mr-2" />
            API
          </TabsTrigger>
        </TabsList>

        {/* Website Widget Integration */}
        <TabsContent value="widget" className="space-y-4">
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
                  <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={handleCopyClick}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
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
        </TabsContent>

        {/* Facebook Integration */}
        <TabsContent value="facebook" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Facebook Messenger Integration</CardTitle>
              <CardDescription>
                Connect your Facebook page to provide automated responses through Messenger.
              </CardDescription>
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
                <p className="text-xs text-muted-foreground">
                  You can find your Page ID in your Facebook Page settings.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="page-access-token">Page Access Token</Label>
                <Input id="page-access-token" type="password" placeholder="Enter your Page Access Token" />
                <p className="text-xs text-muted-foreground">
                  Generate a Page Access Token from Facebook Developer Console.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="verify-token">Verify Token</Label>
                <Input
                  id="verify-token"
                  placeholder="Create a unique verify token"
                  defaultValue="saleai-fb-verify-token"
                />
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
        </TabsContent>

        {/* Telegram Integration */}
        <TabsContent value="telegram" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Telegram Bot Integration</CardTitle>
              <CardDescription>
                Create a Telegram bot that uses your AI to respond to customer inquiries.
              </CardDescription>
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
                <Label htmlFor="bot-token">Telegram Bot Token</Label>
                <Input id="bot-token" placeholder="Enter your Telegram Bot Token" />
                <p className="text-xs text-muted-foreground">
                  Create a new bot and get a token from BotFather on Telegram.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bot-username">Bot Username</Label>
                <Input id="bot-username" placeholder="Enter your bot's username" />
                <p className="text-xs text-muted-foreground">
                  The username you set when creating your bot (ends with 'bot').
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="welcome-message-telegram">Welcome Message</Label>
                <Textarea
                  id="welcome-message-telegram"
                  placeholder="Hello! How can I help you today?"
                  defaultValue="Hello! I'm your AI sales assistant. Ask me anything about our products!"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="group-chats" />
                <Label htmlFor="group-chats">Enable in group chats</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View Setup Guide</Button>
              <Button>Connect Telegram Bot</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Zalo Integration */}
        <TabsContent value="zalo" className="space-y-4">
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
        </TabsContent>

        {/* API Integration */}
        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Integration</CardTitle>
              <CardDescription>
                Integrate our AI directly into your own applications using our REST API.
              </CardDescription>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
