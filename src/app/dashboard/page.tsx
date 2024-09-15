import { auth } from '@/auth'
import Image from '@/components/Image'
import SignOutButton from '@/components/SignOutButton'

export default async function Dashboard() {
  const session = await auth()

  if (session?.user) {
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
  } else {
    return <span>You are not signed in</span>
  }
}
