import { useState } from 'react'
import Link from '@/components/Link'

export default function MobileDropdown({ title, sublist }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="inline-block w-full text-gray-900 dark:text-gray-100">
      <button
        className="inline-flex w-full items-center px-4 py-4 text-lg font-medium focus:outline-none"
        onClick={() => setOpen((open) => !open)}
      >
        <span className="mr-1">{title}</span>
        <svg
          className={`h-5 w-5 transform fill-current transition duration-200 ease-in-out ${
            open ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      {open && (
        <ul className="ddivide-gray-400 divide-y bg-gray-100 font-medium dark:bg-gray-700">
          {sublist &&
            sublist.map((item, idx) => (
              <Link
                key={idx}
                className="block whitespace-nowrap py-3 pl-8 first:rounded-t last:rounded-b"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
        </ul>
      )}
    </div>
  )
}
