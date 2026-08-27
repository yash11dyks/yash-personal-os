'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function ApplicationForm() {
  const [title, setTitle] = useState('')
  const [track, setTrack] = useState('government')
  const [status, setStatus] = useState('planned')
  const [deadline, setDeadline] = useState('')
  const [notes, setNotes] = useState('')
  const [link, setLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setError('Not logged in')
      setLoading(false)
      return
    }

    const { error } = await supabase.from('applications').insert({
      user_id: user.id,
      title,
      track,
      status,
      deadline: deadline || null,
      notes: notes || null,
      link: link || null,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setTitle('')
    setDeadline('')
    setNotes('')
    setLink('')
    setLoading(false)
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="border rounded-lg p-4 space-y-3">
      <h2 className="font-medium">Add application</h2>

      <input
        type="text"
        placeholder="Title (e.g. RRB JE CEN 04/2026)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border rounded px-3 py-2 text-sm"
      />

      <div className="grid grid-cols-2 gap-3">
        <select
          value={track}
          onChange={(e) => setTrack(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        >
          <option value="government">Government</option>
          <option value="corporate">Corporate</option>
          <option value="phd">PhD</option>
          <option value="project">Project</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        >
          <option value="planned">Planned</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
          <option value="offer">Offer</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
        <input
          type="url"
          placeholder="Link (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
      </div>

      <textarea
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full border rounded px-3 py-2 text-sm"
        rows={2}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white rounded px-4 py-2 text-sm"
      >
        {loading ? 'Adding...' : 'Add application'}
      </button>
    </form>
  )
}
