import { ImgHTMLAttributes, useState } from 'react'
import clsx from 'classnames'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}

export default function ImageWithFallback({ fallbackSrc = 'https://via.placeholder.com/800x600?text=Image', className, onError, ...props }: Props) {
  const [errored, setErrored] = useState(false)

  return (
    <img
      className={clsx('block', className)}
      onError={(e) => {
        if (!errored) {
          setErrored(true)
          const target = e.target as HTMLImageElement
          target.src = fallbackSrc
        }
        onError?.(e)
      }}
      {...props}
    />
  )
}


