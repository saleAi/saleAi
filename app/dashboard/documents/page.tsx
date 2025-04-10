import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DocumentUploader } from "@/components/document-uploader"

export default function DocumentsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Document Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Document Management</CardTitle>
          <CardDescription>Upload and manage your product documentation to train the AI assistant.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DocumentUploader />
        </CardContent>
      </Card>
    </>
  )
}
