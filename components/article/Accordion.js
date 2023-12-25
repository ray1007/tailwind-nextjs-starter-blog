'use client'

import { useState } from 'react'

export default function Accordion({ title, tags, children, startOpen = false }) {
  const [open, setOpen] = useState(startOpen)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen((open) => !open)
  }

  return (
    <details open={open} className="my-1 w-full rounded border-2 ">
      <summary
        className="ml-6 pb-2 pt-2 font-bold"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="presentation"
      >
        {title && <span className="text-md mr-3 font-bold">{title}</span>}
        {tags &&
          tags.map((tag) => (
            <span
              className="mb-2 mr-2 rounded-md bg-gray-100 px-2 py-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              key={tag}
            >
              {tag}
            </span>
          ))}
      </summary>
      <div className="ml-6">{open && children}</div>
    </details>
  )
}
