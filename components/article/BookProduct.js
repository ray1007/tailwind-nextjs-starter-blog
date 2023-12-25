import Link from '@/components/Link'

export default function BookProduct({ title, price, link, imgUrl, hasTranslation }) {
  return (
    <div className="mb-2 items-start rounded border-2 border-blue-500 p-1 md:flex md:w-5/6 md:rounded-xl md:p-3">
      <img className="h-48" style={{ margin: 0 }} src={imgUrl} alt="書籍封面" />
      <div className="pl-2 md:pl-4">
        <div className="mb-4 text-lg font-bold md:text-2xl">{title}</div>

        <div className="flex items-center">
          <Link className="" href={link}>
            <button className="rounded-lg bg-blue-500 px-3 py-1 text-white">
              USD {price} on Kindle
            </button>
          </Link>
        </div>
        {hasTranslation === false && <div className="mb-2 py-1 text-gray-500">(暫無中譯本)</div>}
        {hasTranslation && <div className="mb-2 py-1 text-gray-500">{hasTranslation}</div>}
      </div>
    </div>
  )
}
