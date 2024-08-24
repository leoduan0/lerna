import { auth } from '@/auth'
import { Link } from '../Link'
import { Image } from '../Image'
import { SignInButton } from '../SignInButton'

export default async function Account() {
  const session = await auth()

  if (session?.user) {
    return (
      <Link
        href={'/dashboard'}
        className="flex items-center space-x-2 rounded-md p-2 transition hover:bg-neutral-200 active:scale-95 dark:hover:bg-neutral-700"
      >
        <Image
          src={session.user.image ?? ''}
          width={24}
          height={24}
          alt="User Avatar"
          className="rounded-full"
        />
        <span className="text-sm font-bold">{session.user.name}</span>
      </Link>
    )
  } else {
    return <SignInButton />
  }
}
