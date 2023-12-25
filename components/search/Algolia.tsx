import React from 'react'
import type { LinkProps } from 'next/link'
import type {
  DocSearchModal as DocSearchModalType,
  DocSearchProps,
  DocSearchModalProps,
} from '@docsearch/react'
import type { StoredDocSearchHit } from '@docsearch/react/dist/esm/types'

export type AlgoliaSearchProps = {
  algoliaConfig: DocSearchProps
}

export interface AlgoliaConfig {
  provider: 'algolia'
  algoliaConfig: DocSearchProps
}

export interface AlgoliaSearchQuery {
  setSearch: (search: string) => void
  toggle: () => void
}

export interface AlgoliaSearchContext {
  query: AlgoliaSearchQuery
}

const DocSearchModal: typeof DocSearchModalType | null = null

export const AlgoliaSearchContext = React.createContext<AlgoliaSearchContext>(
  {} as AlgoliaSearchContext
)

/**
 * Command palette like search component for algolia - `ctrl-k` to open the palette.
 * To toggle the modal or search from child components, use the search context:
 * ```
 * import { AlgoliaSearchContext } from 'pliny/search/algolia'
 * const { query } = useContext(AlgoliaSearchContext)
 * ```
 *
 */
export const AlgoliaSearchProvider: React.FC<React.PropsWithChildren<AlgoliaSearchProps>> = (
  props
) => {
  return null
}
