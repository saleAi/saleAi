"use client"

import { useState } from "react"
import { Check, Edit, Plus, Search, Trash2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type KnowledgeItem = {
  id: string
  question: string
  answer: string
  source: string
  category: string
  confidence: number
}

export function KnowledgeBase() {
  const [searchTerm, setSearchTerm] = useState("")
  const [items, setItems] = useState<KnowledgeItem[]>([
    {
      id: "1",
      question: "What is the warranty period for Product X?",
      answer: "Product X comes with a 2-year limited warranty that covers manufacturing defects.",
      source: "Product Manual v2.0.pdf",
      category: "Warranty",
      confidence: 0.95,
    },
    {
      id: "2",
      question: "How do I reset my device?",
      answer:
        "To reset your device, press and hold the power button for 10 seconds until the LED indicator flashes blue.",
      source: "Technical Specifications.docx",
      category: "Troubleshooting",
      confidence: 0.88,
    },
    {
      id: "3",
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, American Express, PayPal, and bank transfers.",
      source: "FAQ Sheet.xlsx",
      category: "Payments",
      confidence: 0.92,
    },
    {
      id: "4",
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days within the continental US. Express shipping is available for 1-2 business days delivery.",
      source: "FAQ Sheet.xlsx",
      category: "Shipping",
      confidence: 0.9,
    },
  ])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editedItem, setEditedItem] = useState<KnowledgeItem | null>(null)

  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const startEditing = (item: KnowledgeItem) => {
    setEditingId(item.id)
    setEditedItem({ ...item })
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditedItem(null)
  }

  const saveEditing = () => {
    if (editedItem) {
      setItems(items.map((item) => (item.id === editedItem.id ? editedItem : item)))
      setEditingId(null)
      setEditedItem(null)
    }
  }

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 0.9) {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{(confidence * 100).toFixed(0)}%</Badge>
    } else if (confidence >= 0.7) {
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{(confidence * 100).toFixed(0)}%</Badge>
      )
    } else {
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{(confidence * 100).toFixed(0)}%</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search knowledge base..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Entry
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Question</TableHead>
              <TableHead>Answer</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Confidence</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                {editingId === item.id ? (
                  <>
                    <TableCell>
                      <Input
                        value={editedItem?.question || ""}
                        onChange={(e) => setEditedItem({ ...editedItem!, question: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={editedItem?.answer || ""}
                        onChange={(e) => setEditedItem({ ...editedItem!, answer: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>{item.source}</TableCell>
                    <TableCell>
                      <Input
                        value={editedItem?.category || ""}
                        onChange={(e) => setEditedItem({ ...editedItem!, category: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>{getConfidenceBadge(item.confidence)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={saveEditing}>
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Save</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={cancelEditing}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Cancel</span>
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell className="font-medium">{item.question}</TableCell>
                    <TableCell>{item.answer}</TableCell>
                    <TableCell>{item.source}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.category}</Badge>
                    </TableCell>
                    <TableCell>{getConfidenceBadge(item.confidence)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => startEditing(item)}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => deleteItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
