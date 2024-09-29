"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SearchIcon, MenuIcon, XIcon } from 'lucide-react'
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { ModalFormComponent } from './modal-form'
export function WebAppNavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`sticky top-0 z-50 bg-background shadow-sm transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary">WebApp</Link>
            </div>
              <div>
                <ModalFormComponent />
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </div>
              <Input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-input rounded-md leading-5 bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <Button variant="outline">Sign In</Button>
            <Button>Login</Button>
          </div>
          <div className="flex md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-primary-foreground hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/dashboard" className="text-primary-foreground hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
            <Link href="/features" className="text-primary-foreground hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium">Features</Link>
            <Link href="/pricing" className="text-primary-foreground hover:bg-primary-foreground/10 block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-input">
            <div className="px-2 space-y-1">
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <Input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 pr-3 py-2 border border-input rounded-md leading-5 bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>
              <Button variant="outline" className="w-full justify-center">Sign In</Button>
              <Button className="w-full justify-center mt-2">Login</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}