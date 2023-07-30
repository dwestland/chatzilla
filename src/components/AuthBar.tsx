import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from '@/components/AuthButtons'

export default async function AuthBar() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <div className="bg-green-500">
        {session && <span>Hello {session?.user?.email}</span>}
        <LoginButton />
        <LogoutButton />
        
        <h2>Server Session</h2>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  )
}
