import { Pagination } from "@/components"

export default function Page() {
  return <Pagination pages={
    [
      {
        name: "Method 1",
        content: (
          <span>
            Method 1 content
          </span>
        )
      },
      {
        name: "Method 2",
        content: (
          <span>
            Method 2 content
          </span>
        )
      },
      {
        name: "Method 1",
        content: (
          <span>
            Method 1 content
          </span>
        )
      },
      {
        name: "Method 1",
        content: (
          <span>
            Method 1 content
          </span>
        )
      },
    ]
  } />
}
