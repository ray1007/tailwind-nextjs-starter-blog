'use client'

import { useInView } from 'react-intersection-observer'

export default function Table({ products, features }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const nCols = (products || []).length

  return (
    <div className="no-prose mx-auto mb-2 flex flex-row flex-nowrap" ref={ref}>
      <div className="flex flex-row flex-nowrap overflow-x-auto">
        <div className={`grid flex-none gap-1 grid-cols-${nCols + 1} text-sm`}>
          <div className="rounded-sm bg-gray-200 p-1 dark:bg-gray-700"></div>

          {/* Product Names */}
          {products &&
            products.map((product, idx) => (
              <div
                key={`title-${idx}`}
                className={`w-40 break-words rounded-sm bg-gray-200 p-1 text-center font-bold dark:bg-gray-700`}
              >
                {product.title}
              </div>
            ))}

          <div className={`w-40 rounded-sm bg-gray-200 p-1 text-center dark:bg-gray-700`}></div>

          {/* Product Image */}
          {products &&
            products.map((product) => (
              <div
                key={`img-${product.title}`}
                className={`table-cell w-40 rounded-sm bg-gray-200 p-1 dark:bg-gray-700`}
                style={{ height: '248px' }}
              >
                {product.imgUrl && (
                  <>
                    <a href={product.link} target="_blank" rel="noopener noreferrer sponsored">
                      <img style={{ margin: 0 }} width={152} height={152} src={product.imgUrl} />
                    </a>
                    <figcaption className="mt-2 text-center text-xs font-bold">
                      {product.name}
                    </figcaption>
                  </>
                )}
                {product.amazonProductIframeSrc && (true || inView) && (
                  <iframe
                    title="amazonProductFrame"
                    sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                    className="mx-auto"
                    style={{ width: '120px', height: '240px' }}
                    marginWidth={0}
                    marginHeight={0}
                    scrolling="no"
                    frameBorder="0"
                    src={product.amazonProductIframeSrc}
                  />
                )}
              </div>
            ))}

          {/* Custom Product features */}
          {features &&
            features.map(({ name, cols }, featIdx) => (
              <>
                <div
                  key={featIdx}
                  className="rounded-sm bg-gray-200 p-2 text-center dark:bg-gray-700"
                >
                  {name}
                </div>
                {cols &&
                  cols.map((col, colIdx) => (
                    <div
                      key={`${featIdx}-${colIdx}`}
                      className={`w-40 rounded-sm bg-gray-200 p-2 text-center dark:bg-gray-700`}
                    >
                      {col}
                    </div>
                  ))}
              </>
            ))}

          {/* Product Link Button 
          <div className="p-3 bg-gray-200 rounded-sm text-center">
            查看商品
          </div>
          {products && products.map((product) => 
            <div key={`link-${product.title}`} className="p-1 bg-gray-200 rounded-sm text-center">
              <a href={product.link} target="_blank" rel="noopener noreferrer sponsored">
                <div className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">傳送門</div>
              </a>
            </div>
          )}
          */}
        </div>
      </div>
    </div>
  )
}
