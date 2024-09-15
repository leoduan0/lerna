'use server'

import Button from './Button'
import Image from './Image'
import { signIn } from '@/auth'

interface SignInButton {
  provider?: 'GitHub'
}

async function SignInButton({ provider }: SignInButton) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}
    >
      <Button
        type="submit"
        className="flex items-center space-x-2 rounded-md p-2 transition active:scale-[0.98] enabled:hover:bg-neutral-200 disabled:cursor-not-allowed enabled:dark:hover:bg-neutral-700"
      >
        {provider && (
          <Image
            src={provider == 'GitHub' ? '/github-dark.svg' : ''}
            width={24}
            height={24}
            alt={`${provider} Logo`}
          />
        )}
        <span className="text-sm font-bold">{`Sign in${provider ? ' with ' + provider : ''}`}</span>
      </Button>
    </form>
  )
}

export default SignInButton
