"use server"

export type ConnectionRequest = {
  id: string
  fromUserName: string
  fromUserImage: string | null
  createdAt: string
}

// This is a mock implementation - in a real app, this would interact with your database
export async function getConnectionStatus(userId: string): Promise<"none" | "pending" | "connected"> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // For demo purposes, return different statuses for different users
  if (userId === "johnsmith") {
    return "connected"
  } else if (userId === "sarahjohnson") {
    return "pending"
  }

  return "none"
}

export async function sendConnectionRequest(userId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { success: true }
}

export async function acceptConnectionRequest(requestId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { success: true }
}

export async function rejectConnectionRequest(requestId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { success: true }
}

export async function getPendingConnectionRequests(): Promise<ConnectionRequest[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Return mock data
  return [
    { id: "1", fromUserName: "Jane Smith", fromUserImage: "/woman-profile.png", createdAt: "2023-05-15" },
    { id: "2", fromUserName: "John Doe", fromUserImage: "/man-profile.png", createdAt: "2023-05-14" },
    { id: "3", fromUserName: "Alex Johnson", fromUserImage: "/abstract-profile.png", createdAt: "2023-05-13" },
  ]
}
