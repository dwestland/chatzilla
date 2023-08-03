import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from '@/components/AuthButtons'
import Container from '@/components/Container'

export default async function AuthBar() {
  const session = await getServerSession(authOptions)

  return (
    <Container className="py-0">
      <div className="flex items-center justify-between border-gray-600 border h-12">
        <div className="">
          Session
        </div>
        <div className=''>          
          {session && <span>Hello {session?.user?.email}</span>}&nbsp;
          {!session && <LoginButton />}
          {session && <LogoutButton />}
        </div>
      </div>
    </Container>
  )
}
