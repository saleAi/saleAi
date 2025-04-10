import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KnowledgeBase } from "@/components/knowledge-base"

export default function KnowledgeBasePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Knowledge Base</h1>
      <Card>
        <CardHeader>
          <CardTitle>Knowledge Base</CardTitle>
          <CardDescription>View and manage the information extracted from your documents.</CardDescription>
        </CardHeader>
        <CardContent>
          <KnowledgeBase />
        </CardContent>
      </Card>
    </>
  )
}
