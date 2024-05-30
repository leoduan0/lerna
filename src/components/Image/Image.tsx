import NextImage from 'next/image'

export default function Image(props: {
  source: string
  width: number
  height: number
  className?: string
  background?: 'light' | 'dark'
  alt: string
}): React.ReactNode {
  const image: React.ReactNode = (
    <NextImage
      src={props.source}
      width={props.width}
      height={props.height}
      alt={props.alt}
      className={props.className}
    />
  )

  if (props.background) {
    switch (props.background) {
      case 'light':
        return <div className={'h-fit w-fit rounded-xl bg-white'}>{image}</div>
      case 'dark':
        return <div className={'h-fit w-fit rounded-xl bg-black'}>{image}</div>
    }
  } else {
    return image
  }
}
