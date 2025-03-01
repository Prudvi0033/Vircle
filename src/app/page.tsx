import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ui/ModeToggle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <Button><SignInButton mode='modal' /></Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <Button variant='secondary'> Click me </Button>
        <ModeToggle/>
      </header>
    </div>
  )
}

export default Home