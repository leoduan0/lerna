import { Block, Heading } from '../'

export default function Example(props: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <Block>
      <Heading level={5}>Example</Heading>
      {props.children}
    </Block>
  )
}
