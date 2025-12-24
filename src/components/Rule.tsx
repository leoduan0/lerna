import Block from "./Block"
import Heading from "./Heading"
import { MathExpression } from "./math-expression"

interface RuleProps {
  annotation?: React.ReactNode
  statement: React.ReactNode
  terms?: {
    term: string
    annotation: React.ReactNode
  }[]
}

function Rule({ annotation, statement, terms }: RuleProps) {
  return (
    <Block>
      <Heading level={4}>Rule</Heading>
      <Heading level={5}>Statement</Heading>
      {statement}
      {terms && (
        <>
          <Heading level={5}>Term</Heading>
          {terms.map((term) => (
            <div key={term.term}>
              <span>
                <MathExpression math={`${term.term}=`} type="inline" />{" "}
                {term.annotation}
              </span>
            </div>
          ))}
        </>
      )}
      {annotation && (
        <>
          <Heading level={5}>Annotation</Heading>
          {annotation}
        </>
      )}
    </Block>
  )
}

export default Rule
