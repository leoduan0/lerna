import { Align } from '../'

export default function Showcase(props: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <Align type={'center'}>
      <div className="flex w-fit flex-col justify-center space-y-2 overflow-x-auto lg:flex-row lg:space-x-2 lg:space-y-0">
        {props.children}
      </div>
    </Align>
  )
}
