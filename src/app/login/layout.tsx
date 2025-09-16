import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function LoginPage({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    redirect('/painel')
  }

  return (
    <div className="min-h-dvh w-screen flex items-center justify-center">
      {children}
    </div>
  )
}
