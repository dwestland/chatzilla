import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from '@/components/AuthButtons'
import Container from '@/components/Container'

export default async function AuthBar() {
  const session = await getServerSession(authOptions)

  return (
    <Container className="py-0">
      <div className="bg-green-500">
        {session && <span>Hello {session?.user?.email}</span>}&nbsp;
        {!session && <LoginButton />}
        {session && <LogoutButton />}
        
        {/* <LogoutButton /> */}
        
        {/* <pre>{JSON.stringify(session)}</pre> */}
      </div>
    </Container>
  )
}
