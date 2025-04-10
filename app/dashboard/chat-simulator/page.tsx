import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatSimulator } from "@/components/chat-simulator"

export default function ChatSimulatorPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Chat Simulator</h1>
      <Card>
        <CardHeader>
          <CardTitle>Chat Simulator</CardTitle>
          <CardDescription>Test how your AI assistant responds to customer queries.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChatSimulator />
        </CardContent>
      </Card>
    </>
  )
}
