import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-blue-600 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">facebook</h1>
          <div className="flex gap-2">
            <Input
              className="w-64 bg-blue-500 text-white placeholder:text-blue-200 border-blue-400 focus-visible:ring-blue-300"
              placeholder="Search..."
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                <Link href="/feed" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Home
                </Link>
                <Link href="/profile" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Profile
                </Link>
                <Link href="/friends" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Friends
                </Link>
                <Link href="/messages" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Messages
                </Link>
              </nav>
            </CardContent>
          </Card>
        </aside>

        <div className="w-full md:w-2/4">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <Input className="flex-1" placeholder="What's on your mind?" />
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t">
                <Button variant="ghost" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  Photo
                </Button>
                <Button variant="ghost" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  File
                </Button>
                <Button variant="ghost" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                  Feeling
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <PostCard
              user="Jane Smith"
              time="2 hours ago"
              content="Just finished reading an amazing book! Anyone have recommendations for what I should read next?"
              likes={24}
              comments={8}
            />

            <PostCard
              user="John Doe"
              time="5 hours ago"
              content="Check out this beautiful sunset I captured yesterday!"
              image="/placeholder.svg?height=400&width=600"
              likes={142}
              comments={37}
            />

            <PostCard
              user="Alex Johnson"
              time="Yesterday"
              content="Just got promoted at work! So excited for this new chapter 🎉"
              likes={215}
              comments={64}
            />
          </div>
        </div>

        <aside className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Friend Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <FriendRequest name="Michael Brown" mutualFriends={3} />
                <FriendRequest name="Sarah Wilson" mutualFriends={5} />
                <FriendRequest name="David Lee" mutualFriends={2} />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/friend-requests" className="text-blue-600 text-sm hover:underline">
                See all requests
              </Link>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Contact name="Emily Davis" online={true} />
                <Contact name="Robert Miller" online={true} />
                <Contact name="Jennifer Wilson" online={false} />
                <Contact name="Thomas Anderson" online={true} />
                <Contact name="Lisa Johnson" online={false} />
              </div>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  )
}

function PostCard({ user, time, content, image, likes, comments }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">{user}</h3>
            <p className="text-sm text-gray-500">{time}</p>
          </div>
        </div>

        <p className="mb-4">{content}</p>

        {image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img src={image || "/placeholder.svg"} alt="Post image" className="w-full h-auto" />
          </div>
        )}

        <div className="flex justify-between text-sm text-gray-500 pb-2">
          <div>{likes} likes</div>
          <div>{comments} comments</div>
        </div>

        <div className="flex border-t border-b py-1 my-2">
          <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            Like
          </Button>
          <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Comment
          </Button>
          <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 4-10 12-10-12" />
            </svg>
            Share
          </Button>
        </div>

        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <Input className="flex-1" placeholder="Write a comment..." />
        </div>
      </CardContent>
    </Card>
  )
}

function FriendRequest({ name, mutualFriends }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-xs text-gray-500">{mutualFriends} mutual friends</p>
      </div>
      <div className="flex gap-2">
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          Accept
        </Button>
        <Button size="sm" variant="outline">
          Decline
        </Button>
      </div>
    </div>
  )
}

function Contact({ name, online }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        {online && (
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium">{name}</h3>
      </div>
    </div>
  )
}

