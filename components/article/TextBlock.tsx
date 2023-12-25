export default function TextBlock({ children }) {
  return (
    <div className="my-1 rounded-md bg-gray-200 px-6 py-2 text-sm italic text-gray-700 shadow shadow-inner dark:bg-gray-700 dark:text-gray-300">
      {children}
    </div>
  )
}
