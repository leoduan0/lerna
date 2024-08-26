'use server'

import { Button } from '../Button'
import { Image } from '../Image'
import { signIn } from '@/auth'

export default async function SignInButton(props: { provider?: 'GitHub' }) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(props.provider)
      }}
    >
      <Button
        type="submit"
        className="flex items-center space-x-2 rounded-md p-2 transition active:scale-[0.98] enabled:hover:bg-neutral-200 disabled:cursor-not-allowed enabled:dark:hover:bg-neutral-700"
      >
        {props.provider && (
          <Image
            src={props.provider == 'GitHub' ? '/github-dark.svg' : ''}
            width={24}
            height={24}
            alt={`${props.provider} Logo`}
          />
        )}
        <span className="text-sm font-bold">{`Sign in${props.provider ? ' with ' + props.provider : ''}`}</span>
      </Button>
    </form>
  )
}
