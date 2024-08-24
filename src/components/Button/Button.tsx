export default function Button({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>): React.ReactNode {
  return <button {...props}></button>
}
