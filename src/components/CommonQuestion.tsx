import Block from './Block'
import Item from './Item'
import { Accordion, AccordionItem } from '@nextui-org/react'

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
      <Accordion>
        {qas.map((qa) => {
          return (
            <AccordionItem title={qa.question}>
              {' '}
              {/* Add keys */}
              {qa.answer}
            </AccordionItem>
          )
        })}
      </Accordion>
    </Block>
  )
}

export default CommonQuestion
