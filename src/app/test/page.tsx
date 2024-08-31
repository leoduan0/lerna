import { Pagination } from "@/components"

export default function Page() {
  return <Pagination pages={
    [
      {
        name: "Method 1",
        content: (
          <>
            Method 1 content
          </>
        )
      }
    ]
  } />
}
