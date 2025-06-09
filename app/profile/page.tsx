import { redirect } from "next/navigation"

// This page redirects to the current user's profile
export default function ProfilePage() {
  // In a real app, you would get the current user's username from authentication
  const currentUsername = "alexmorgan"

  // Redirect to the current user's profile page
  redirect(`/profile/${currentUsername}`)
}
