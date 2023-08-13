import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from '@/components/AuthButtons'
import Container from '@/components/Container'
import Link from 'next/link'

export default async function AuthBar() {
  const session = await getServerSession(authOptions)

  console.log('session', session)

  return (
    <Container className="py-0">
      <div className="flex items-center justify-between h-8 px-4 border border-gray-600">
        <div className="">Session</div>
        <Link href="./admin-dashboard">Dashboard</Link>
        <div className="text-sm">
          {session && (
            <span>Hello {session?.user?.email}&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          )}
          {!session && <LoginButton />}
          {session && <LogoutButton />}
        </div>
      </div>
    </Container>
  )
}
