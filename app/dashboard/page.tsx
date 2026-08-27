import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import ApplicationForm from '@/components/ApplicationForm'
import ApplicationList from '@/components/ApplicationList'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: applications } = await supabase
    .from('applications')
    .select('*')
    .order('deadline', { ascending: true, nullsFirst: false })

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <div>
        <h1 className="text-2xl font-semibold">Application Tracker</h1>
        <p className="text-gray-500 text-sm">Logged in as {user.email}</p>
      </div>

      <ApplicationForm />

      <ApplicationList applications={applications ?? []} />
    </div>
  )
}
