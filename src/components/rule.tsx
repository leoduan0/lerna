import { Block } from "./block"
import { MathExpression } from "./math-expression"

interface RuleProps {
  annotation?: React.ReactNode
  statement: React.ReactNode
  terms?: {
    term: string
    annotation: React.ReactNode
  }[]
}

export function Rule({ annotation, statement, terms }: RuleProps) {
  return (
    <Block>
      <h4 className="normal">Rule</h4>
      <h5 className="normal">Statement</h5>
      {statement}
      {terms && (
        <>
          <h5 className="normal">Terms</h5>
          <ul>
            {terms.map((term) => (
              <li key={term.term}>
                <MathExpression math={`${term.term}=`} type="inline" />{" "}
                {term.annotation}
              </li>
            ))}
          </ul>
        </>
      )}
      {annotation && (
        <>
          <h5 className="normal">Annotation</h5>
          {annotation}
        </>
      )}
    </Block>
  )
}
