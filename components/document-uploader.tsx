"use client"

import { useState } from "react"
import { ArrowUpFromLine, FileText, Loader2, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type Document = {
  id: string
  name: string
  type: string
  size: string
  status: "processing" | "ready" | "error"
  uploadedAt: string
}

export function DocumentUploader() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Product Manual v2.0.pdf",
      type: "PDF",
      size: "2.4 MB",
      status: "ready",
      uploadedAt: "2024-04-10",
    },
    {
      id: "2",
      name: "FAQ Sheet.xlsx",
      type: "Excel",
      size: "1.2 MB",
      status: "ready",
      uploadedAt: "2024-04-09",
    },
    {
      id: "3",
      name: "Technical Specifications.docx",
      type: "Word",
      size: "3.7 MB",
      status: "processing",
      uploadedAt: "2024-04-11",
    },
  ])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileUpload = () => {
    setUploading(true)
    setUploadProgress(0)

    // Simulate file upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)

          // Add a new document to the list
          const newDoc: Document = {
            id: (documents.length + 1).toString(),
            name: "New Document.pdf",
            type: "PDF",
            size: "1.8 MB",
            status: "processing",
            uploadedAt: new Date().toISOString().split("T")[0],
          }

          setDocuments([...documents, newDoc])

          // Simulate processing completion after 2 seconds
          setTimeout(() => {
            setDocuments((docs) => docs.map((doc) => (doc.id === newDoc.id ? { ...doc, status: "ready" } : doc)))
          }, 2000)

          return 0
        }
        return prev + 5
      })
    }, 100)
  }

  const removeDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed rounded-lg p-8 text-center">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center gap-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <ArrowUpFromLine className="h-5 w-5" />
          </div>
          <h3 className="mt-2 text-lg font-semibold">Upload Documents</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">Drag and drop your files here or click to browse</p>
          <input id="file-upload" type="file" className="hidden" multiple />
          <Button onClick={handleFileUpload} disabled={uploading}>
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <ArrowUpFromLine className="mr-2 h-4 w-4" />
                Upload Files
              </>
            )}
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">Supported formats: PDF, DOCX, XLSX, CSV, TXT</p>
        </div>
      </div>

      {uploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium mb-4">Uploaded Documents</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Uploaded</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {doc.name}
                </TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>
                  {doc.status === "processing" ? (
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                      Processing
                    </Badge>
                  ) : doc.status === "ready" ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Ready
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      Error
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{doc.uploadedAt}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => removeDocument(doc.id)}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
