'use client'

import { useInView } from 'react-intersection-observer'

export default function Table({ products }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <div
      className="my-2 flex gap-4 overflow-x-auto pb-2 md:pb-0"
      style={{ height: '240px' }}
      ref={ref}
    >
      {inView &&
        products &&
        products.map(({ productSrc }, idx) => (
          <iframe
            key={idx}
            title={`amazon product ${idx}`}
            sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style={{ width: '120px', height: '240px' }}
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            frameBorder="0"
            src={productSrc}
          />
        ))}
    </div>
  )
}
