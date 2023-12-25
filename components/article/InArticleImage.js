'use client'

import Image from 'next/image'

function cloudinaryLoader({ src, width, quality }) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]
  return `https://res.cloudinary.com/strengthen-yourself/image/upload/${params.join(',')}/${src}`
}

function getSizes(width = 'w-1/1') {
  const fraction = width.split('-')[1]
  const [numerator, denominator] = fraction.split('/')
  const widthPx = Math.ceil((1.2 * 768 * parseFloat(numerator)) / parseFloat(denominator))
  return `(max-width: 768px) 100vw, ${widthPx}px`
}

/*function getSizes(width = "w-1") {
  const widthRatio = parseFloat(width.split('-')[1]);
  const mdPercentage = Math.ceil(75 * widthRatio);
  const lgPercentage = Math.ceil(60 * widthRatio);
  const xlPercentage = Math.ceil(50 * widthRatio);
  return `(max-width: 768px) 100vw, (max-width: 1024px) ${mdPercentage}vw, (max-width: 1280px) ${lgPercentage}vw, 768px`;
}*/

export default function InArticleImage({
  className,
  smWidth,
  width,
  height,
  src,
  alt,
  objectFit,
  caption,
}) {
  return (
    <figure>
      <div className={`${smWidth || 'w-full'} md:${width || 'w-full'} not-prose`}>
        <div className={`relative ${height || 'pb-9/16'} w-full ${className || ''}`}>
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: objectFit || 'cover' }}
            // loader={cloudinaryLoader}
            sizes={getSizes(width)}
          />
        </div>
      </div>
      {caption && <figcaption className="italic">{caption}</figcaption>}
    </figure>
  )
}
