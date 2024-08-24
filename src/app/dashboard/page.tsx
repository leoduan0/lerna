import { auth } from '@/auth'
import { Image } from '@/components'
import { SignOutButton } from '@/components'

export default async function Dashboard() {
  const session = await auth()

  if (!session?.user) return null

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Image
          src={session.user.image ?? ''}
          width={32}
          height={32}
          alt="User avatar"
          className="rounded-full"
        />
        <span className="font-bold">{session.user.name}</span>
      </div>
      <div>
        <span>{session.user.email}</span>
      </div>
      <SignOutButton />
    </div>
  )
}
