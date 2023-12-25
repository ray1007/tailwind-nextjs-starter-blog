import siteMetadata from '@/data/siteMetadata'
import navbarLinks from '@/data/navbarLinks'
import Logo from '@/data/logo.svg'
import Link from '../Link'
import Dropdown from './Dropdown'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 border-gray-500 px-4 py-4">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold lg:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 lg:space-x-6">
        <div className="hidden lg:block">
          {navbarLinks &&
            navbarLinks.map((navbarLink) => <Dropdown key={navbarLink.title} {...navbarLink} />)}
          <Link className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href="/blogs">
            文章列表
          </Link>
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
