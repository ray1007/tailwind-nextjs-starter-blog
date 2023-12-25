export default function SmallText({ isParagraph, children }) {
  return isParagraph ? (
    <span className="text-sm text-gray-500">
      <p>{children}</p>
    </span>
  ) : (
    <span className="text-sm text-gray-500">{children}</span>
  )
}
