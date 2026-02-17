import NextImage from "next/image"

interface ImageProps extends React.ComponentProps<typeof NextImage> {
  src: string
  width: number
  height: number
  alt: string
}

export function Image({ src, width, height, alt, ...rest }: ImageProps) {
  return (
    <NextImage src={src} width={width} height={height} alt={alt} {...rest} />
  )
}
