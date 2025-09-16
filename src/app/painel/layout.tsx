import Navbar from '@/components/Navbar'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardPage({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await auth.api.getSession({
    headers: await headers(),
  })

  if (!data) {
    redirect('/login')
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
