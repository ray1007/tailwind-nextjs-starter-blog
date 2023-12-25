import Link from '@/components/Link'

interface SublistElement {
  title: string
  link: string
}

interface Props {
  title: string
  link?: string
  sublist: SublistElement[]
}

const Div = ({ children, className, href }) => <div className={className}>{children}</div>

export default function Dropdown({ title, link, sublist }: Props) {
  let DropdownElement = Div
  if (link !== undefined) {
    DropdownElement = Link
  }

  return (
    <div className="group relative z-50 mx-1 inline-block">
      <div className="inline-flex items-center rounded px-2 py-2 font-medium text-gray-700 focus:outline-none group-hover:bg-gray-200 dark:group-hover:bg-gray-600">
        <DropdownElement className="inline-flex items-center" href={link}>
          <span className="mr-1 text-gray-900 dark:text-gray-100">{title}</span>
          <svg
            className="h-4 w-4 fill-current text-gray-900 dark:text-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </DropdownElement>
      </div>
      <ul className="absolute hidden divide-y divide-white pt-1 text-sm font-medium text-gray-700 group-hover:block">
        {sublist &&
          sublist.map((item, idx) => (
            <Link
              key={idx}
              className="block whitespace-nowrap bg-gray-200 px-4 py-2 text-gray-900 first:rounded-t last:rounded-b hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500"
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
      </ul>
    </div>
  )
}
