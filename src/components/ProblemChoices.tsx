'use client'

import { useState } from 'react'

interface ProblemsChoicesProps {
  choices: React.ReactNode[]
  correct: number
}

function ProblemsChoices({ choices, correct }: ProblemsChoicesProps) {
  const [selected, setSelected] = useState<number>(-1)

  function handleChoiceSelection(index: number) {
    if (selected == index) {
      setSelected(-1)
    } else {
      setSelected(index)
    }
  }

  function handleAnswerSubmission() {
    if (selected == correct - 1) {
      alert('Correct')
    } else {
      alert('Incorrect')
    }
  }

  return (
    <div className="space-y-2">
      <ol className="w-full">
        {choices.map((choice, index) => (
          <li key={index}>
            <button
              className={`${selected == index ? 'bg-blue-500 dark:bg-blue-600' : 'hover:bg-neutral-300 dark:hover:bg-neutral-500'} w-full cursor-pointer rounded-lg border border-black p-2 text-left transition active:scale-[0.99] dark:border-white`}
              onClick={() => handleChoiceSelection(index)}
            >
              <span>{choice}</span>
            </button>
          </li>
        ))}
      </ol>
      <button
        onClick={() => handleAnswerSubmission()}
        disabled={selected == -1}
        className={`${selected == -1 ? '' : 'active:scale-95'} rounded-md p-2 transition enabled:hover:bg-neutral-200 disabled:cursor-not-allowed enabled:dark:hover:bg-neutral-700`}
      >
        <span>Check</span>
      </button>
    </div>
  )
}

export default ProblemsChoices
