'use server'

import { signIn } from '@/auth'
import { Button } from '../Button'
import { Image } from '../Image'

export default async function SignInButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github')
      }}
    >
      <Button
        type="submit"
        className="flex items-center space-x-2 rounded-md p-2 transition active:scale-95 enabled:hover:bg-neutral-200 disabled:cursor-not-allowed enabled:dark:hover:bg-neutral-700"
      >
        <Image
          src="/github-dark.svg"
          width={24}
          height={24}
          alt="GitHub logo"
        />
        <span className="text-sm font-bold">Sign in with GitHub</span>
      </Button>
    </form>
  )
}
