import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-blue-600 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white">facebook</h1>
          </Link>
          <div className="flex gap-2">
            <Input
              className="w-64 bg-blue-500 text-white placeholder:text-blue-200 border-blue-400 focus-visible:ring-blue-300"
              placeholder="Search..."
            />
            <Button size="icon" variant="ghost" className="text-white">
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
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </Button>
            <Button size="icon" variant="ghost" className="text-white">
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
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-1/4">
          <Card className="sticky top-24">
            <CardContent className="p-4">
              <nav className="space-y-1">
                <Link href="/profile" className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-md">
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
                  <span className="font-medium">Your Profile</span>
                </Link>
                <Link href="/friends" className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-md">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="font-medium">Friends</span>
                </Link>
                <Link href="/groups" className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-md">
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
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="font-medium">Groups</span>
                </Link>
                <Link href="/marketplace" className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-md">
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
                      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                      <path d="M2 7h20" />
                      <path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
                      <path d="M6 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
                    </svg>
                  </div>
                  <span className="font-medium">Marketplace</span>
                </Link>
                <Link href="/watch" className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-md">
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
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="m9 8 6 4-6 4Z" />
                    </svg>
                  </div>
                  <span className="font-medium">Watch</span>
                </Link>
                <Link href="/events" className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-md">
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
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </div>
                  <span className="font-medium">Events</span>
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
            {[1, 2, 3, 4, 5].map((post) => (
              <FeedPost key={post} />
            ))}
          </div>
        </div>

        <aside className="w-full md:w-1/4">
          <Card className="sticky top-24">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Sponsored</h3>
              <div className="space-y-4">
                <div>
                  <div className="rounded-lg overflow-hidden mb-2">
                    <img src="/placeholder.svg?height=120&width=240" alt="Advertisement" className="w-full h-auto" />
                  </div>
                  <h4 className="font-medium text-sm">Try our new product today!</h4>
                  <p className="text-xs text-gray-500">example.com</p>
                </div>
                <div>
                  <div className="rounded-lg overflow-hidden mb-2">
                    <img src="/placeholder.svg?height=120&width=240" alt="Advertisement" className="w-full h-auto" />
                  </div>
                  <h4 className="font-medium text-sm">Special offer for new users</h4>
                  <p className="text-xs text-gray-500">example.com</p>
                </div>
              </div>

              <div className="border-t my-4 pt-4">
                <h3 className="font-semibold mb-4">Contacts</h3>
                <div className="space-y-3">
                  <Contact name="Emily Davis" online={true} />
                  <Contact name="Robert Miller" online={true} />
                  <Contact name="Jennifer Wilson" online={false} />
                  <Contact name="Thomas Anderson" online={true} />
                  <Contact name="Lisa Johnson" online={false} />
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  )
}

function FeedPost() {
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
            <h3 className="font-semibold">Random User</h3>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>

        <p className="mb-4">Just sharing this amazing view from my vacation! #blessed #travel</p>

        <div className="mb-4 rounded-lg overflow-hidden">
          <img src="/placeholder.svg?height=400&width=600" alt="Post image" className="w-full h-auto" />
        </div>

        <div className="flex justify-between text-sm text-gray-500 pb-2">
          <div>124 likes</div>
          <div>36 comments</div>
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
      </CardContent>
    </Card>
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

