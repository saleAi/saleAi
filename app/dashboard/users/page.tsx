import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, UserPlus } from "lucide-react"

export default function UsersPage() {
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "Active",
      lastActive: "1 day ago",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "Viewer",
      status: "Inactive",
      lastActive: "2 weeks ago",
    },
    {
      id: "4",
      name: "Alice Williams",
      email: "alice.williams@example.com",
      role: "Editor",
      status: "Active",
      lastActive: "3 hours ago",
    },
  ]

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-medium">All Users</h2>
          <p className="text-sm text-muted-foreground">Manage user access and permissions</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.status === "Active"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
