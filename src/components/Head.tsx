import Image from './Image'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface HeadProps {
  toggleFunction: () => void
}

function Head({ toggleFunction }: HeadProps) {
  return (
    <div className="flex h-12 w-full items-center justify-center space-x-2 border-b border-neutral-300 dark:border-neutral-700">
      <Image
        src="/lerna.png"
        height={32}
        width={32}
        className="rounded-lg"
        alt=""
      />
      <span className="text-theme font-bold">Lerna</span>
      <button
        onClick={() => toggleFunction()}
        className="rounded-md p-2 transition hover:bg-neutral-200 active:scale-95 dark:hover:bg-neutral-700 lg:hidden"
      >
        <FontAwesomeIcon className="h-4 w-4" icon={faXmark} />
      </button>
    </div>
  )
}

export default Head
