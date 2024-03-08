'use client'

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { useDisconnect } from "wagmi"

export const UserAccountNav = () => {
  const { disconnect } = useDisconnect()
  function handleSignOut(): void {
    disconnect()
    signOut(
      {redirect: true,
      callbackUrl: `${window.location.origin}/sign-in`}
  )
  }
    return<Button onClick={handleSignOut} variant={'destructive'}>
    Sign Out
  </Button>
}