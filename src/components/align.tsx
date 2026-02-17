interface AlignProps {
  type: "center"
  children: React.ReactNode
}

export function Align({ type, children }: AlignProps) {
  switch (type) {
    case "center":
      return (
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-2">{children}</div>
        </div>
      )
  }
}
