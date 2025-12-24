import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "./Image"

interface HeadProps {
  toggleFunction: () => void
}

function Head({ toggleFunction }: HeadProps) {
  return (
    <div className="flex h-12 w-full items-center justify-center space-x-2 border-layout-border border-b">
      <Image src="/lerna_logo.png" height={32} width={64} alt="logo" />
      <button
        onClick={() => toggleFunction()}
        className="rounded-md p-2 transition hover:bg-button active:scale-95 lg:hidden"
        type="button"
      >
        {" "}
        <FontAwesomeIcon className="h-4 w-4" icon={faXmark} />{" "}
      </button>{" "}
    </div>
  )
}

export default Head
