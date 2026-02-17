import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface BlockProps {
  children: React.ReactNode
  text?: string
}

export function Block({ children, text }: BlockProps) {
  return (
    <Card className="w-full gap-2 py-4">
      {text && (
        <CardHeader className="px-4 pb-0">
          <h5 className="normal">{text}</h5>
        </CardHeader>
      )}
      <CardContent className={cn("flex flex-col gap-2 px-4", text && "pt-0")}>
        {children}
      </CardContent>
    </Card>
  )
}
