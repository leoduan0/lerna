import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "./Image"

interface HeadProps {
  toggleFunction: () => void
}

function Head({ toggleFunction }: HeadProps) {
  return (
    <div className="flex h-12 w-full items-center justify-center space-x-2 border-b border-LAYOUT_BORDER-light dark:border-LAYOUT_BORDER-dark">
      <Image src="/lerna_logo.png" height={32} width={64} alt="logo" />
      <button
        onClick={() => toggleFunction()}
        className="rounded-md p-2 transition hover:bg-BUTTON-light active:scale-95 dark:hover:bg-BUTTON-dark lg:hidden"
        type="button"
      >
        {" "}
        <FontAwesomeIcon className="h-4 w-4" icon={faXmark} />{" "}
      </button>{" "}
    </div>
  )
}

export default Head
