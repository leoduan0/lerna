import Block from './Block'
import Item from './Item'

export type TQA = {
  question: React.ReactNode
  answer: React.ReactNode
}

interface CommonQuestionProps {
  qas: TQA[]
}

function CommonQuestion({ qas }: CommonQuestionProps) {
  return (
    <Block text={qas.length == 1 ? 'Common Question' : 'Common Questions'}>
      <div className="divide-y divide-neutral-300 dark:divide-neutral-600">
        {qas.map((qa: TQA, index: number): React.ReactNode => {
          return (
            <div key={index}>
              <Item qa={qa} /> {/* Cursor not pointer when hovering */}
            </div>
          )
        })}
      </div>
    </Block>
  )
}

export default CommonQuestion
