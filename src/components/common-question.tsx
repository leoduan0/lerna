"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Block } from "./block"

export type TQA = {
  question: React.ReactNode
  answer: React.ReactNode
}

interface CommonQuestionProps {
  qas: TQA[]
}

export function CommonQuestion({ qas }: CommonQuestionProps) {
  return (
    <Block text={qas.length === 1 ? "Common Question" : "Common Questions"}>
      <Accordion type="single" collapsible className="w-full">
        {qas.map((qa, index) => {
          return (
            <AccordionItem
              key={`${qa.question?.toString() ?? "qa"}-${index}`}
              value={`item-${index}`}
            >
              <AccordionTrigger className="text-foreground text-left hover:no-underline">
                {qa.question}
              </AccordionTrigger>
              <AccordionContent>{qa.answer}</AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Block>
  )
}
