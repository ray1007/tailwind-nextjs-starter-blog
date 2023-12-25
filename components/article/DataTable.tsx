export default function DataTable({ headerCells, rows, widths, totalWidth, firstColDark }) {
  return (
    <div className={`grid flex-none gap-1 md:max-w-lg ${totalWidth} mb-2 text-sm`}>
      {headerCells.map((headerCell, idx) => (
        <div
          key={idx}
          className={`${widths[idx]} rounded-sm bg-gray-300 p-1 text-center font-bold dark:bg-gray-700`}
        >
          {headerCell}
        </div>
      ))}

      {rows.flatMap((columns) =>
        columns.map((cell, idx) =>
          firstColDark && idx === 0 ? (
            <div
              key={idx}
              className={`${widths[idx]} rounded-sm bg-gray-300 px-2 py-0.5 text-center  dark:bg-gray-700`}
            >
              {cell}
            </div>
          ) : (
            <div
              key={idx}
              className={`${widths[idx]} rounded-sm bg-gray-200 px-2 py-0.5 text-center  dark:bg-gray-600`}
            >
              {cell}
            </div>
          )
        )
      )}
    </div>
  )
}
