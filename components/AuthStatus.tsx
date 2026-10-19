'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

export default function AuthStatus() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [supabase])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading) return null

  if (!user) {
    return (
      <a href="/login" className="hover:text-gray-500">
        Login
      </a>
    )
  }

    return (
    <div className="flex items-center gap-4">
      <a href="/dashboard" className="hover:text-gray-500">
        Dashboard
      </a>
      <button onClick={handleLogout} className="hover:text-gray-500">
        Logout
      </button>
    </div>
  )
}
