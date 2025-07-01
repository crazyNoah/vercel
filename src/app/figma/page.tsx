"use client"

import { Bell, ChevronDown, TrendingUp } from "lucide-react"
import Image from "next/image"
import type { ReactNode } from "react"

// Avatar Component
interface AvatarProps {
  className?: string
  children: ReactNode
}

function Avatar({ className = "", children }: AvatarProps) {
  return <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>
}

interface AvatarImageProps {
  src: string
  alt?: string
}

function AvatarImage({ src, alt }: AvatarImageProps) {
  return <Image className="aspect-square h-full w-full" src={src || "/placeholder.svg"} alt={alt || ""} width={40} height={40} />
}

interface AvatarFallbackProps {
  className?: string
  children: ReactNode
}

function AvatarFallback({ className = "", children }: AvatarFallbackProps) {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 ${className}`}>
      {children}
    </div>
  )
}

// Card Component
interface CardProps {
  className?: string
  children: ReactNode
}

function Card({ className = "", children }: CardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}>{children}</div>
  )
}

interface CardContentProps {
  className?: string
  children: ReactNode
}

function CardContent({ className = "", children }: CardContentProps) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

// Button Component
interface ButtonProps {
  variant?: "ghost" | "link"
  size?: "icon"
  className?: string
  children: ReactNode
  onClick?: () => void
}

function Button({ variant, size, className = "", children, onClick }: ButtonProps) {
  let baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  if (variant === "ghost") {
    baseClasses += " hover:bg-gray-100 hover:text-gray-900"
  }

  if (variant === "link") {
    baseClasses += " underline-offset-4 hover:underline text-gray-900"
  }

  if (size === "icon") {
    baseClasses += " h-10 w-10"
  } else {
    baseClasses += " h-10 px-4 py-2"
  }

  return (
    <button className={`${baseClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

// Badge Component
interface BadgeProps {
  className?: string
  children: ReactNode
}

function Badge({ className = "", children }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 bg-gray-900 text-gray-50 ${className}`}
    >
      {children}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-700 to-teal-600 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
                <span className="font-bold text-lg">WO HUI</span>
                <span className="text-sm">MANDARIN</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-white font-medium border-b-2 border-orange-400 pb-1">
                  Dashboard
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Courses
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Assignments
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Community
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs p-0 flex items-center justify-center">
                  1
                </Badge>
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-orange-400 text-white">S</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-5xl font-bold text-gray-900">Hello Shylar !</h1>
          <div className="text-right">
            <div className="text-5xl font-bold text-gray-900 mb-1">16:22</div>
            <div className="text-sm text-gray-400 flex items-center justify-end">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              October 20th, 2020
            </div>
          </div>
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-5 gap-6 mb-12">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="text-orange-400 text-2xl mb-2">📝</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">449</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">CHARACTERS</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="text-orange-400 text-2xl mb-2">💭</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">362</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">WORDS</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="text-orange-400 text-2xl mb-2">📄</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">571</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">SENTENCES</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">LANGUAGE POINTS</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="text-orange-400 text-2xl mb-2">📚</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">335</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">TEXTS</div>
            </CardContent>
          </Card>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Left Column - Progress */}
          <div className="space-y-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    So far you&apos;ve acquired <span className="font-bold text-gray-900">[2000]</span> words and unlocked{" "}
                    <span className="font-bold text-gray-900">[80%]</span> of Chinese with us.
                  </p>
                  <button className="text-orange-400 text-sm hover:underline flex items-center">
                    Growth <span className="ml-1">↗</span>
                  </button>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="6" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#f97316"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${80 * 2.51} 251`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900">80%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <div className="mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    You are currently <span className="font-bold text-gray-900">[N]</span>th on the leaderboard with{" "}
                    <span className="font-bold text-gray-900">[N]</span>XP.
                  </p>
                  <button className="text-orange-400 text-sm hover:underline">Leaderboard →</button>
                </div>

                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-900 mb-2">8</div>
                  <div className="flex items-center justify-center text-green-500 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="font-medium">+5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Activity Chart */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  You&apos;ve invested <span className="font-bold text-gray-900">[N]/[N]</span> minutes today. {" "}
                  <span className="font-bold text-gray-900">[There&apos;s still time!]</span>
                </p>
                <button className="text-orange-400 text-sm hover:underline">Daily goals →</button>
              </div>

              <div className="relative h-40 mb-6">
                <svg className="w-full h-full" viewBox="0 0 350 160" preserveAspectRatio="none">
                  {/* Y-axis scale */}
                  <text x="15" y="25" fontSize="12" fill="#9ca3af">
                    100
                  </text>
                  <text x="15" y="45" fontSize="12" fill="#9ca3af">
                    80
                  </text>
                  <text x="15" y="65" fontSize="12" fill="#9ca3af">
                    60
                  </text>
                  <text x="15" y="85" fontSize="12" fill="#9ca3af">
                    40
                  </text>
                  <text x="15" y="105" fontSize="12" fill="#9ca3af">
                    20
                  </text>

                  {/* Smooth activity curve */}
                  <path
                    d="M 40 120 C 80 110, 120 100, 160 85 C 200 70, 240 60, 280 45 C 300 40, 320 35, 330 30"
                    stroke="#f97316"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Gradient fill under curve */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 40 120 C 80 110, 120 100, 160 85 C 200 70, 240 60, 280 45 C 300 40, 320 35, 330 30 L 330 140 L 40 140 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Current point indicator */}
                  <circle cx="330" cy="30" r="4" fill="#f97316" />

                  {/* Time indicator tooltip */}
                  <rect x="310" y="15" width="40" height="18" rx="9" fill="#374151" />
                  <text x="330" y="26" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">
                    82min
                  </text>
                </svg>

                {/* Day labels */}
                <div className="flex justify-between text-xs text-gray-400 mt-3 px-10">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Recent Activity & Notifications */}
          <div className="space-y-8 pt-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Last time, you got to{" "}
                  <span className="font-bold text-gray-900">
                    [Range] {">"} [Mountain] {">"} [Section] {">"} [Series Item]
                  </span>
                  .
                </p>
                <button className="text-orange-400 text-sm hover:underline font-medium">Continue →</button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  By the way, you have <span className="font-bold text-gray-900">N</span> notifications.
                </p>
                <button className="text-orange-400 text-sm hover:underline font-medium">Notifications →</button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">And we also thought you might be interested in these:</p>
            <button className="text-orange-400 text-sm hover:underline">Explore more →</button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-white shadow-sm overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Business meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Puts learning into the hands of the student and empowers teachers to support them on their personal
                    learning journey.
                  </p>
                  <button className="text-gray-700 text-sm hover:underline">Read more →</button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Happy Journeying Message */}
        <div className="text-center text-gray-400 mb-8">
          <p className="italic">Happy journeying!</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex space-x-8">
              <a href="#" className="hover:text-gray-700 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Terms of Service
              </a>
            </div>
            <div>© 2020 Wo Hui (Pte) Ltd</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
