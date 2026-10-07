'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
type Application = {
  id: string
  title: string
  track: string
  status: string
  deadline: string | null
  notes: string | null
  link: string | null
}
const TRACK_LABELS: Record<string, string> = {
  government: 'Government',
  corporate: 'Corporate',
  phd: 'PhD',
  project: 'Project',
}
const STATUS_COLORS: Record<string, string> = {
  planned: 'bg-gray-100 text-gray-700',
  applied: 'bg-blue-100 text-blue-700',
  interview: 'bg-purple-100 text-purple-700',
  rejected: 'bg-red-100 text-red-700',
  offer: 'bg-green-100 text-green-700',
  completed: 'bg-gray-200 text-gray-600',
}
function deadlineInfo(deadline: string | null) {
  if (!deadline) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const d = new Date(deadline)
  const diffDays = Math.ceil((d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  if (diffDays < 0) return { label: `Overdue by ${Math.abs(diffDays)}d`, color: 'text-red-600 font-medium' }
  if (diffDays === 0) return { label: 'Due today', color: 'text-red-600 font-medium' }
  if (diffDays <= 7) return { label: `Due in ${diffDays}d`, color: 'text-amber-600 font-medium' }
  return { label: d.toLocaleDateString(), color: 'text-gray-500' }
}
function EditForm({ app, onCancel }: { app: Application; onCancel: () => void }) {
  const [title, setTitle] = useState(app.title)
  const [track, setTrack] = useState(app.track)
  const [status, setStatus] = useState(app.status)
  const [deadline, setDeadline] = useState(app.deadline ?? '')
  const [notes, setNotes] = useState(app.notes ?? '')
  const [link, setLink] = useState(app.link ?? '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)
    const supabase = createClient()
    const { error } = await supabase
      .from('applications')
      .update({
        title,
        track,
        status,
        deadline: deadline || null,
        notes: notes || null,
        link: link || null,
      })
      .eq('id', app.id)
    if (error) {
      setError(error.message)
      setSaving(false)
      return
    }
    setSaving(false)
    router.refresh()
    onCancel()
  }
  return (
    <form onSubmit={handleSave} className="border rounded-lg p-3 space-y-2 bg-gray-50">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border rounded px-3 py-2 text-sm"
      />
      <div className="grid grid-cols-2 gap-2">
        <select value={track} onChange={(e) => setTrack(e.target.value)} className="border rounded px-3 py-2 text-sm">
          <option value="government">Government</option>
          <option value="corporate">Corporate</option>
          <option value="phd">PhD</option>
          <option value="project">Project</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border rounded px-3 py-2 text-sm">
          <option value="planned">Planned</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
          <option value="offer">Offer</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="border rounded px-3 py-2 text-sm" />
        <input type="url" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} className="border rounded px-3 py-2 text-sm" />
      </div>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border rounded px-3 py-2 text-sm" rows={2} />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <div className="flex gap-2">
        <button type="submit" disabled={saving} className="bg-black text-white rounded px-3 py-1.5 text-sm">
          {saving ? 'Saving...' : 'Save'}
        </button>
        <button type="button" onClick={onCancel} className="border rounded px-3 py-1.5 text-sm">
          Cancel
        </button>
      </div>
    </form>
  )
}
export default function ApplicationList({ applications }: { applications: Application[] }) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  async function handleDelete(id: string) {
    setDeletingId(id)
    const supabase = createClient()
    await supabase.from('applications').delete().eq('id', id)
    router.refresh()
    setDeletingId(null)
  }
  async function handleStatusChange(id: string, status: string) {
    const supabase = createClient()
    await supabase.from('applications').update({ status }).eq('id', id)
    router.refresh()
  }
  const tracks = ['government', 'corporate', 'phd', 'project']
  const upcoming = applications
    .filter((a) => a.deadline)
    .filter((a) => {
      const info = deadlineInfo(a.deadline)
      return info && (info.label.includes('Overdue') || info.label.includes('Due'))
    })
  return (
    <div className="space-y-8">
      {upcoming.length > 0 && (
        <div className="border border-amber-300 bg-amber-50 rounded-lg p-4">
          <h2 className="font-medium mb-2">Needs attention</h2>
          <ul className="space-y-1 text-sm">
            {upcoming.map((a) => {
              const info = deadlineInfo(a.deadline)
              return (
                <li key={a.id} className="flex justify-between">
                  <span>{a.title}</span>
                  <span className={info?.color}>{info?.label}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {tracks.map((track) => {
        const items = applications.filter((a) => a.track === track)
        if (items.length === 0) return null
        return (
          <div key={track}>
            <h2 className="font-medium mb-3">{TRACK_LABELS[track]}</h2>
            <div className="space-y-2">
              {items.map((a) => {
                if (editingId === a.id) {
                  return <EditForm key={a.id} app={a} onCancel={() => setEditingId(null)} />
                }
                const info = deadlineInfo(a.deadline)
                return (
                  <div key={a.id} className="border rounded-lg p-3 flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        {a.link ? (
                          <a href={a.link} target="_blank" className="font-medium hover:underline">
                            {a.title}
                          </a>
                        ) : (
                          <span className="font-medium">{a.title}</span>
                        )}
                        <span className={`text-xs px-2 py-0.5 rounded ${STATUS_COLORS[a.status]}`}>
                          {a.status}
                        </span>
                      </div>
                      {a.notes && <p className="text-sm text-gray-500 mt-1">{a.notes}</p>}
                      {info && <p className={`text-xs mt-1 ${info.color}`}>{info.label}</p>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <select
                        value={a.status}
                        onChange={(e) => handleStatusChange(a.id, e.target.value)}
                        className="text-xs border rounded px-1 py-1"
                      >
                        <option value="planned">Planned</option>
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="rejected">Rejected</option>
                        <option value="offer">Offer</option>
                        <option value="completed">Completed</option>
                      </select>
                      <button
                        onClick={() => setEditingId(a.id)}
                        className="text-xs text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(a.id)}
                        disabled={deletingId === a.id}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      {applications.length === 0 && (
        <p className="text-gray-400 text-sm text-center py-8">No applications yet. Add your first one above.</p>
      )}
    </div>
  )
}
