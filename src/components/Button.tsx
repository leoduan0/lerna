import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ ...rest }: ButtonProps) {
  return <button {...rest}></button>
}

export default Button
