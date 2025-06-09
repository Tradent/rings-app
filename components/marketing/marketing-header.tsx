"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Radio, Menu, X } from "lucide-react"
import { useState } from "react"
import { TryDemoButton } from "@/components/try-demo-button"

export function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 flex items-center justify-center">
              <Radio className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold">Rings</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/features"
            className={`transition-colors ${
              isActive("/features") ? "text-gold-400" : "text-slate-300 hover:text-white"
            }`}
          >
            Features
          </Link>
          <Link
            href="/testimonials"
            className={`transition-colors ${
              isActive("/testimonials") ? "text-gold-400" : "text-slate-300 hover:text-white"
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="/pricing"
            className={`transition-colors ${
              isActive("/pricing") ? "text-gold-400" : "text-slate-300 hover:text-white"
            }`}
          >
            Pricing
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <TryDemoButton>Try Demo</TryDemoButton>
          <Link href="/signin" className="text-slate-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Button className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-slate-900">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 space-y-4">
          <Link
            href="/features"
            className={`block py-2 ${isActive("/features") ? "text-gold-400" : "text-slate-300 hover:text-white"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/testimonials"
            className={`block py-2 ${isActive("/testimonials") ? "text-gold-400" : "text-slate-300 hover:text-white"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/pricing"
            className={`block py-2 ${isActive("/pricing") ? "text-gold-400" : "text-slate-300 hover:text-white"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="pt-4 flex flex-col space-y-4">
            <TryDemoButton onClick={() => setMobileMenuOpen(false)}>Try Demo</TryDemoButton>
            <Link
              href="/signin"
              className="text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Button
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
