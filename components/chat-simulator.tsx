"use client"

import type React from "react"

import { useState } from "react"
import { Send, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(Date.now() - 60000),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let botResponse = ""

      // Simple pattern matching for demo purposes
      const userMessageLower = inputValue.toLowerCase()

      if (userMessageLower.includes("warranty") || userMessageLower.includes("guarantee")) {
        botResponse =
          "Our products come with a 2-year limited warranty that covers manufacturing defects. You can register your warranty on our website or by calling customer service."
      } else if (userMessageLower.includes("shipping") || userMessageLower.includes("delivery")) {
        botResponse =
          "Standard shipping takes 3-5 business days within the continental US. Express shipping is available for 1-2 business days delivery. International shipping varies by location."
      } else if (userMessageLower.includes("return") || userMessageLower.includes("refund")) {
        botResponse =
          "We offer a 30-day return policy for unused items in original packaging. Refunds are processed within 5-7 business days after we receive the returned item."
      } else if (userMessageLower.includes("reset") || userMessageLower.includes("restart")) {
        botResponse =
          "To reset your device, press and hold the power button for 10 seconds until the LED indicator flashes blue. This will restore factory settings."
      } else {
        botResponse =
          "I don't have specific information about that in my knowledge base. Would you like me to connect you with a human agent for more assistance?"
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-[600px]">
      <Tabs defaultValue="simulator" className="flex-1">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="simulator">Chat Simulator</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="simulator" className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex gap-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <Avatar className="h-8 w-8">
                    {message.sender === "user" ? (
                      <>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>AI</AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg p-3 bg-muted">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce delay-75"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <Button size="icon" onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="settings" className="p-4">
          <Card>
            <div className="p-4 space-y-4">
              <h3 className="text-lg font-medium">AI Response Settings</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Response Time</span>
                  <span>1.5 seconds</span>
                </div>
                <input type="range" min="0.5" max="3" step="0.1" defaultValue="1.5" className="w-full" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Confidence Threshold</span>
                  <span>70%</span>
                </div>
                <input type="range" min="50" max="95" step="5" defaultValue="70" className="w-full" />
                <p className="text-xs text-muted-foreground">
                  When confidence is below this threshold, the AI will suggest connecting with a human agent.
                </p>
              </div>
              <div className="pt-4">
                <Button className="w-full">Save Settings</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
