"use client"

import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
          <div
            onClick={() => toggleExpand()}
            className="flex h-8 w-full items-center space-x-2 rounded-md text-sm transition hover:cursor-pointer"
          >
            <FontAwesomeIcon
              className={`${
                expand ? "rotate-90" : ""
              } fill-black dark:fill-white`}
              icon={faCaretRight}
            />
            <Heading level={5}>Solution</Heading>
          </div>
          {expand && solution}
        </>
      )}
    </Block>
  )
}

export default Problem
