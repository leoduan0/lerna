"use client"

import { Accordion, AccordionItem } from "@heroui/react"
import Block from "./Block"

export type TQA = {
  question: React.ReactNode
  answer: React.ReactNode
}

interface CommonQuestionProps {
  qas: TQA[]
}

function CommonQuestion({ qas }: CommonQuestionProps) {
  return (
    <Block text={qas.length === 1 ? "Common Question" : "Common Questions"}>
      <Accordion>
        {qas.map((qa) => {
          return (
            <AccordionItem key={qa.question?.toString()} title={qa.question}>
              {qa.answer}
            </AccordionItem>
          )
        })}
      </Accordion>
    </Block>
  )
}

export default CommonQuestion
