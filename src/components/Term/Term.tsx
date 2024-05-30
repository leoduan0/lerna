import { Block, Heading } from '../'

export default function Term(props: {
  term: string
  definition: React.ReactNode
}) {
  return (
    <Block>
      <Heading level={5}>Definition</Heading>
      <p className="font-bold">{props.term}:</p>
      {props.definition}
    </Block>
  )
}
