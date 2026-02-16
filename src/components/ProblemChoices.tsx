"use client"

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react"
import { useState } from "react"

interface ProblemsChoicesProps {
  choices: React.ReactNode[]
  correct: number
}

function ProblemsChoices({ choices, correct }: ProblemsChoicesProps) {
  const [selected, setSelected] = useState(-1)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const correctIndex = correct >= 1 ? correct - 1 : correct
  const isCorrect = selected === correctIndex

  return (
    <div className="space-y-2">
      <ol className="w-full">
        {choices.map((choice, index) => (
          <li key={index}>
            <button
              className={`${selected === index ? "bg-button-selected" : "hover:bg-button"} w-full cursor-pointer rounded-lg border border-black p-2 text-left transition active:scale-[0.99] dark:border-white`}
              onClick={() => setSelected(selected === index ? -1 : index)}
              type="button"
            >
              <span>{choice}</span>
            </button>
          </li>
        ))}
      </ol>
      <Button isDisabled={selected === -1} onPress={onOpen}>
        Check
      </Button>
      {selected !== -1 && (
        <div
          className={`text-sm ${isCorrect ? "text-green-600" : "text-red-600"}`}
          aria-live="polite"
        >
          {isCorrect ? "✅ Correct" : "❌ Incorrect"}
        </div>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                {isCorrect ? "✅ Correct" : "❌ Incorrect"}
              </ModalHeader>
              <ModalBody>
                Your answer was{" "}
                {isCorrect ? "correct" : "incorrect"}!
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ProblemsChoices
