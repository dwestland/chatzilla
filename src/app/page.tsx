import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from './auth'
import Nav from '@/components/Nav'
// import { User } from '@/app/user'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Home Page</h1>
    </main>
  )
}
