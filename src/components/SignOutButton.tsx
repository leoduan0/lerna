'use server'

import Button from './Button'
import { signOut } from '@/auth'

async function SignOutButton() {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signOut({ redirectTo: '/' })
      }}
    >
      <Button
        type="submit"
        className="flex items-center space-x-2 rounded-md p-2 transition active:scale-95 enabled:hover:bg-neutral-200 disabled:cursor-not-allowed enabled:dark:hover:bg-neutral-700"
      >
        <span className="text-sm font-bold">Sign out</span>
      </Button>
    </form>
  )
}

export default SignOutButton
