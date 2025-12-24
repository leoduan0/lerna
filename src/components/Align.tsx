interface AlignProps {
  type: "center"
  children: React.ReactNode
}

function Align({ type, children }: AlignProps) {
  switch (type) {
    case "center":
      return (
        <div className="flex w-full justify-center">
          <div className="space-y-2">{children}</div>
        </div>
      )
  }
}

export default Align
