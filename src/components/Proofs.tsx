import Block from "./Block"
import Heading from "./Heading"
import Pagination from "./Pagination"

interface ProofsProps {
  proofs: {
    name: string
    content: React.ReactNode
  }[]
}
function Proofs({ proofs }: ProofsProps) {
  return (
    <Block>
      <Heading level={5}>{proofs.length === 1 ? "Proof" : "Proofs"}</Heading>
      <Pagination pages={proofs} />
    </Block>
  )
}

export default Proofs
