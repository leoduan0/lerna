import { Block } from '../Block'
import { Heading } from '../Heading'
import { Pagination } from '../Pagination'

interface ProofsProps {
  proofs: {
    name: string
    content: React.ReactNode
  }[]
}

export default function Proofs({ proofs }: ProofsProps) {
  return (
    <Block>
      <Heading level={5}>Proofs</Heading>
      <Pagination pages={proofs} />
    </Block>
  )
}
