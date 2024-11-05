'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  useDisclosure,
} from '@nextui-org/react'
import { useState } from 'react'

interface ProblemsChoicesProps {
  choices: React.ReactNode[]
  correct: number
}

function ProblemsChoices({ choices, correct }: ProblemsChoicesProps) {
  const [selected, setSelected] = useState<number>(-1)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  function handleChoiceSelection(index: number) {
    if (selected == index) {
      setSelected(-1)
    } else {
      setSelected(index)
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
      <Button isDisabled={selected == -1} onPress={onOpen}>
        Check
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => {
            if (selected == correct - 1) {
              return (
                <ModalHeader className="flex flex-col gap-1">
                  ✅ Correct
                </ModalHeader>
              )
            } else {
              return (
                <ModalHeader className="flex flex-col gap-1">
                  ❌ Incorrect
                </ModalHeader>
              )
            }
          }}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ProblemsChoices
