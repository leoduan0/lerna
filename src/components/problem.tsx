"use client"

import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Block } from "./block"

interface ProblemProps {
  choices: React.ReactNode[]
  correct: number
  question: React.ReactNode
  solution?: React.ReactNode
}

export function Problem({
  choices,
  correct,
  question,
  solution,
}: ProblemProps) {
  const [expand, setExpand] = useState<boolean>(false)
  const [selected, setSelected] = useState(-1)
  const [open, setOpen] = useState(false)
  const isCorrect = selected === correct - 1

  function toggleExpand() {
    setExpand((prev) => !prev)
  }

  return (
    <Block>
      <h4 className="normal">Problem</h4>
      <h5 className="normal">Question</h5>
      {question}
      {choices && typeof correct === "number" && (
        <>
          <h5 className="normal">Choices</h5>
          <ol className="w-full flex flex-col gap-2 list-none">
            {choices.map((choice, i) => (
              <li key={choice?.toString()}>
                {/* TODO use proper keys */}
                <Button
                  className={cn(
                    "bg-card text-card-foreground h-auto w-full justify-start overflow-hidden rounded-xl border px-3 py-2 text-left shadow-sm transition-colors",
                    selected === i
                      ? "border-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-accent",
                  )}
                  onClick={() => setSelected((prev) => (prev === i ? -1 : i))}
                  type="button"
                  variant="ghost"
                >
                  {choice}
                </Button>
              </li>
            ))}
          </ol>
          <Button disabled={selected === -1} onClick={() => setOpen(true)}>
            Check
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>
                  {isCorrect ? "\u2705 Correct" : "\u274C Incorrect"}
                </DialogTitle>
                <DialogDescription>
                  Your answer was {isCorrect ? "correct" : "incorrect"}!
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
      {solution && (
        <>
          <Button
            onClick={toggleExpand}
            className="h-8 w-full justify-start px-0"
            type="button"
            variant="ghost"
          >
            <ChevronRight className={expand ? "rotate-90" : ""} />
            <h5 className="normal">Solution</h5>
          </Button>
          {expand && solution}
        </>
      )}
    </Block>
  )
}
