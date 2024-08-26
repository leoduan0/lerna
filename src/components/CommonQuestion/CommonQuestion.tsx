import Item from './Item'
import { Block } from '@/components'

export type TQA = {
  question: React.ReactNode
  answer: React.ReactNode
}

export default function CommonQuestion(props: {
  qas: Array<TQA>
}): React.ReactNode {
  return (
    <Block
      text={props.qas.length == 1 ? 'Common Question' : 'Common Questions'}
    >
      <div className="divide-y divide-neutral-300 dark:divide-neutral-600">
        {props.qas.map((qa: TQA, index: number): React.ReactNode => {
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
