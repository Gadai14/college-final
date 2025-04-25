"use client"

import React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, LogIn, Search, Globe, Sun, Moon, X, Mic } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [showSearch, setShowSearch] = React.useState(false)
  const [currentLanguage, setCurrentLanguage] = React.useState("en")

  const searchRef = React.useRef<HTMLDivElement>(null)

  // Toggle theme directly between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Close search bar when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-6 pt-6">
                <Link href="/practice" className="text-lg font-medium transition-colors hover:text-primary">
                  Practice
                </Link>
                <Link href="/resume" className="text-lg font-medium transition-colors hover:text-primary">
                  Resume
                </Link>
                <div className="space-y-3">
                  <div className="font-medium">Resources</div>
                  <div className="grid gap-2 pl-4">
                    <Link href="/tutorials" className="text-muted-foreground transition-colors hover:text-primary">
                      Tutorials
                    </Link>
                    <Link href="/courses" className="text-muted-foreground transition-colors hover:text-primary">
                      Courses
                    </Link>
                    <Link href="/examples" className="text-muted-foreground transition-colors hover:text-primary">
                      Examples
                    </Link>
                    <Link href="/documentation" className="text-muted-foreground transition-colors hover:text-primary">
                      Documentation
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Button variant="default" className="w-full justify-start gap-2">
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link href="/practice" className="text-sm font-medium transition-colors hover:text-primary">
              Practice
            </Link>
            <Link href="/resume" className="text-sm font-medium transition-colors hover:text-primary">
              Resume
            </Link>

            {/* Resources dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                      <div className="col-span-1 grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/tutorials"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">Tutorials</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Step-by-step guides to help you master new skills
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">Courses</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Comprehensive learning paths for all skill levels
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="col-span-1">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Resources preview"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/documentation"
                            className="mt-4 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Documentation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Detailed reference guides for our platform
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Logo in the middle */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                DevHub
              </span>
            </Link>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Search icon */}
            <Button variant="ghost" size="icon" onClick={toggleSearch} aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>

            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Change language">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className={cn("cursor-pointer", currentLanguage === language.code && "bg-accent")}
                  >
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Direct theme toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Sign in button with enhanced animations */}
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex gap-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-full px-4"
            >
              <span>Sign In</span>
              <LogIn className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Expandable search bar */}
        <div
          ref={searchRef}
          className={cn(
            "absolute left-0 right-0 top-16 z-50 border-b bg-background px-4 py-3 transition-all duration-300",
            showSearch ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
          )}
        >
          <div className="container flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full pl-10 pr-10" autoFocus={showSearch} />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                aria-label="Voice search"
              >
                <Mic className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)} aria-label="Close search">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content - Added properly structured content sections */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to DevHub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your one-stop platform for learning, practicing, and showcasing your development skills.
          </p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Learn</h3>
            <p className="text-muted-foreground mb-4">Access comprehensive tutorials and courses for all skill levels.</p>
            <Link href="/tutorials" className="text-primary hover:underline inline-flex items-center">
              Explore tutorials
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Practice</h3>
            <p className="text-muted-foreground mb-4">Solve coding challenges and build real-world projects.</p>
            <Link href="/practice" className="text-primary hover:underline inline-flex items-center">
              Start practicing
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Showcase</h3>
            <p className="text-muted-foreground mb-4">Build your portfolio and share your projects with employers.</p>
            <Link href="/resume" className="text-primary hover:underline inline-flex items-center">
              Create your resume
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </section>

        {/* Popular Resources Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Popular Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["JavaScript", "React", "Node.js", "Python"].map((topic) => (
              <div key={topic} className="bg-card rounded-lg p-5 shadow-sm border border-border hover:border-primary transition-colors">
                <h3 className="font-medium mb-2">{topic}</h3>
                <p className="text-sm text-muted-foreground">
                  Explore our collection of {topic} tutorials and examples.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your learning journey?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Join thousands of developers who are building their skills and advancing their careers with DevHub.</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Sign Up Now
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">DevHub</h3>
              <p className="text-muted-foreground">Your platform for developer growth and showcase.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Learn</h4>
              <ul className="space-y-2">
                <li><Link href="/tutorials" className="text-muted-foreground hover:text-primary">Tutorials</Link></li>
                <li><Link href="/courses" className="text-muted-foreground hover:text-primary">Courses</Link></li>
                <li><Link href="/documentation" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} DevHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}