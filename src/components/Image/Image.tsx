import NextImage from 'next/image'

export default function Image(props: {
  src: string
  width: number
  height: number
  alt: string
}): React.ReactNode {
  return (
    <NextImage
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  )
}
