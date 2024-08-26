import { Image } from '../Image'
import { Link } from '../Link'
import { SignInButton } from '../SignInButton'
import { auth } from '@/auth'

export default async function Account() {
  const session = await auth()

  if (session?.user) {
    return (
      <Link
        href={'/dashboard'}
        className="flex items-center space-x-2 rounded-md p-2 transition hover:bg-neutral-200 active:scale-[0.98] dark:hover:bg-neutral-700"
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
