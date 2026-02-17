import { Block } from "./block"
import { Pagination } from "./pagination"

interface ProofsProps {
  proofs: {
    name: string
    content: React.ReactNode
  }[]
}
export function Proofs({ proofs }: ProofsProps) {
  return (
    <Block>
      <h5 className="normal">{proofs.length === 1 ? "Proof" : "Proofs"}</h5>
      <Pagination pages={proofs} />
    </Block>
  )
}
