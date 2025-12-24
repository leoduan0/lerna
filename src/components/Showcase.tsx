import Align from "./Align"

interface ShowcaseProps {
  children: React.ReactNode
}

function Showcase({ children }: ShowcaseProps) {
  return (
    <Align type="center">
      <div className="flex w-fit flex-col justify-center space-y-2 overflow-x-auto lg:flex-row lg:space-x-2 lg:space-y-0">
        {children}
      </div>
    </Align>
  )
}

export default Showcase
