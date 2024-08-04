import { Block, Heading, Math } from '../'

export default function Rule(props: {
  statement: React.ReactNode
  terms?: Array<{
    term: string
    annotation: React.ReactNode
  }>
  annotation?: React.ReactNode
}): React.ReactNode {
  return (
    <Block>
      <Heading level={4} clickable={false}>
        Rule
      </Heading>
      <Heading level={5} clickable={false}>
        Statement
      </Heading>
      {props.statement}
      {props.terms && (
        <>
          <Heading level={5} clickable={false}>
            Term
          </Heading>
          {props.terms.map((term) => (
            <div key={term.term}>
              <span>
                <Math math={term.term + '='} type={'inline'} />{' '}
                {term.annotation}
              </span>
            </div>
          ))}
        </>
      )}
      {props.annotation && (
        <>
          <Heading level={5} clickable={false}>
            Annotation
          </Heading>
          {props.annotation}
        </>
      )}
    </Block>
  )
}
