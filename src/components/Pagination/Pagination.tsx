'use client'

export default function Pagination(props: {
  pages: Array<{ name: string; content: React.ReactNode }>
}): React.ReactNode {
  return (
    <div>
      <div>
        {props.pages.map((page, index) => {
          return (
            <button
              key={index}
              id={index.toString()}
              className="text-theme rounded-md p-1 transition hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              {page.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
