import InnerTOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import Link from './Link'
import TableWrapper from './TableWrapper'
import Accordion from './article/Accordion'
import AmazonProductList from './article/AmazonProductList'
import BookProduct from './article/BookProduct'
import DataTable from './article/DataTable'
import EmbedVideo from './article/EmbedVideo'
import HighlightTextSpan from './article/HighlightTextSpan'
import InArticleImage from './article/InArticleImage'
import MarketplaceSelect from './article/MarketplaceSelect'
import ProductTable from './article/ProductTable'
import SmallText from './article/SmallText'
import TextBlock from './article/TextBlock'

const TOCInline = (props) => (
  <details className="w-full sm:w-3/5">
    <summary className="ml-6 pb-2 pt-2 text-xl font-bold">目錄</summary>
    <div className="ml-6">
      <InnerTOCInline {...props} />
    </div>
  </details>
)

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Accordion,
  AmazonProductList,
  BookProduct,
  DataTable,
  EmbedVideo,
  HighlightTextSpan,
  InArticleImage,
  Link,
  MarketplaceSelect,
  ProductTable,
  SmallText,
  TextBlock,
}
