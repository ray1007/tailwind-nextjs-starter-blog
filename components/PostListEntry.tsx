import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { formatDate } from '@/components/utils/formatDate'

export default function PostEntry({ post }) {
  const { slug, date, title, summary, tags, images } = post
  const image = images?.[0]

  return (
    <article className="grid grid-cols-6 gap-2 xl:grid-cols-5 xl:items-start xl:gap-6 xl:space-y-0 xl:space-y-2">
      <Link className="col-span-3 xl:col-span-2" href={`/blogs/${slug}`}>
        <div className="relative w-full rounded border pb-9/16 xl:rounded-lg">
          <Image
            className="rounded xl:rounded-lg"
            src={image}
            alt={`文章封面圖片 - ${slug}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 384px, 410px"
          />
        </div>
      </Link>
      <div className="col-span-3 space-y-2 xl:col-span-3 xl:space-y-5">
        <div className="space-y-1 xl:space-y-6">
          <div>
            <h3 className="text-md font-bold leading-6 tracking-tight md:text-2xl md:leading-8">
              <Link href={`/blogs/${slug}`} className="text-gray-900 dark:text-gray-100">
                {title}
              </Link>
            </h3>
            <div className="flex flex-wrap">
              {tags && tags.map((tag) => <Tag key={tag} text={tag} />)}
            </div>
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-xs font-medium leading-6 text-gray-400 md:text-sm">
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
          </div>
          <div className="prose max-w-none text-xs text-gray-500 dark:text-gray-400 md:text-base">
            <p>{summary}</p>
          </div>
        </div>
        <div className="text-sm font-medium leading-6 xl:text-base">
          <Link
            href={`/blogs/${slug}`}
            className="text-blue-500 hover:text-blue-600"
            aria-label={`閱讀 "${title}"`}
          >
            繼續閱讀 &rarr;
          </Link>
        </div>
      </div>
    </article>
  )
}
