import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from './button'

function UnauthSidebar() {
    return (
        <div className="sticky top-20">
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-xl font-semibold">Welcome Back!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground mb-4">
                        Login to access your profile and connect with others.
                    </p>
                    <SignInButton mode="modal">
                        <Button className="w-full" variant="outline">
                            Login
                        </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button className="w-full mt-2" variant="default">
                            Sign Up
                        </Button>
                    </SignUpButton>
                </CardContent>
            </Card>
        </div>
    )
}

export default UnauthSidebar