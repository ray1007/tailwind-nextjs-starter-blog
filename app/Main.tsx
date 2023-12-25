import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from '@/components/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import PostListEntry from '@/components/PostListEntry'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="my-4 hidden rounded border px-3 py-6 text-center text-xl font-extrabold md:block md:px-6">
          最好的防身，是不斷的自我強化。
        </div>
        <div className="my-4 rounded bg-gray-100 px-6 py-4 dark:bg-gray-800 md:hidden">
          <img src={siteMetadata.siteLogo} alt="" className="mx-auto w-1/4 rounded-full border" />
          <div className="text-md my-2 text-center font-bold underline">{siteMetadata.author}</div>
          <div className="text-center text-sm">
            {siteMetadata.description}
            <div className="mt-4 text-center text-xs">
              如果同是相關內容的創作者，歡迎來信討論guest post或backlink！
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200 pb-16 pr-1 xl:grid xl:grid-cols-4 xl:gap-4 xl:divide-y-0 xl:pb-20">
          <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="space-y-2 py-4 md:space-y-3">
              <h1 className="text-2xl font-extrabold leading-3 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-12">
                最新文章
              </h1>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {!posts.length && '暫無文章'}
                {posts.slice(0, MAX_DISPLAY).map((post) => {
                  return (
                    <li key={post.slug} className="py-6">
                      <PostListEntry post={post} />
                    </li>
                  )
                })}
              </ul>
              <Link
                href="/blogs"
                className="mb-6 block rounded border py-1 text-center text-blue-500 hover:bg-gray-100 hover:text-blue-600"
              >
                所有文章 &rarr;
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* author */}
            <div className="my-4 rounded bg-gray-100 px-6 py-4 dark:bg-gray-800 ">
              <img
                src={siteMetadata.siteLogo}
                alt=""
                className="mx-auto w-1/3 rounded-full border"
              />
              <div className="text-md my-2 text-center font-bold underline">
                {siteMetadata.author}
              </div>
              <div className="text-center text-sm">{siteMetadata.description}</div>
            </div>
            <div className="mb-6 rounded border py-1 text-center text-blue-500 hover:bg-gray-100 hover:text-blue-600">
              <Link href="/blogs">所有文章 &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
