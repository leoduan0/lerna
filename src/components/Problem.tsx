"use client"

import { ChevronRight } from "lucide-react"
import { useState } from "react"
import Block from "./Block"
import Heading from "./Heading"
import ProblemChoices from "./ProblemChoices"

interface ProblemProps {
  choices?: React.ReactNode[]
  correct?: number
  question: React.ReactNode
  solution?: React.ReactNode
}

function Problem({ choices, correct, question, solution }: ProblemProps) {
  const [expand, setExpand] = useState<boolean>(false)

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
    <Block>
      <Heading level={4}>Problem</Heading>
      <Heading level={5}>Question</Heading>
      {question}
      {choices && correct && (
        <>
          <Heading level={5}>Choices</Heading>
          <ProblemChoices choices={choices} correct={correct} />
        </>
      )}
      {solution && (
        <>
          <button
            onClick={() => toggleExpand()}
            className="flex h-8 w-full items-center space-x-2 rounded-md text-sm transition hover:cursor-pointer"
            type="button"
          >
            <ChevronRight className={expand ? "rotate-90" : ""} />
            <Heading level={5}>Solution</Heading>
          </button>
          {expand && solution}
        </>
      )}
    </Block>
  )
}

export default Problem
