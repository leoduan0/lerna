import { Align } from "./align"

interface ShowcaseProps {
  children: React.ReactNode
}

export function Showcase({ children }: ShowcaseProps) {
  return (
    <Align type="center">
      <div className="w-fit justify-center flex flex-col gap-2 overflow-x-auto lg:flex-row lg:space-x-2 lg:space-y-0">
        {children}
      </div>
    </Align>
  )
}
