import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function TelegramIntegrationPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Telegram Bot Integration</CardTitle>
        <CardDescription>Create a Telegram bot that uses your AI to respond to customer inquiries.</CardDescription>
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
          <p className="text-xs text-muted-foreground">Create a new bot and get a token from BotFather on Telegram.</p>
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
  )
}
