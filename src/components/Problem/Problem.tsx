'use client'

import { Block, Heading } from '../'
import ProblemChoices from './ProblemChoices'
import { useState } from 'react'

export default function Problem(props: {
  question: React.ReactNode
  choices?: Array<React.ReactNode>
  solution?: React.ReactNode
  correct?: number
}): React.ReactNode {
  const [expand, setExpand] = useState<boolean>(false)

  function toggleExpand(): void {
    setExpand(!expand)
  }

  return (
    <Block>
      <Heading level={4} clickable={false}>
        Problem
      </Heading>
      <Heading level={5} clickable={false}>
        Question
      </Heading>
      {props.question}
      {props.choices && props.correct && (
        <>
          <Heading level={5} clickable={false}>
            Choices
          </Heading>
          <ProblemChoices choices={props.choices} correct={props.correct} />
        </>
      )}
      {props.solution && (
        <>
          <div
            onClick={() => toggleExpand()}
            className="flex h-8 w-full items-center space-x-2 rounded-md text-sm transition hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8px"
              viewBox="0 0 384 512"
              className={`${
                expand ? 'rotate-90' : ''
              } fill-black dark:fill-white`}
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
            <Heading level={5} clickable={false}>
              Solution
            </Heading>
          </div>
          {expand && props.solution}
        </>
      )}
    </Block>
  )
}
