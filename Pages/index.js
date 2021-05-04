import Link from "next/link"

function HomePage() {
  return (
    <div>
        Welcome to Next.js!

        <Link href="/blog">Blog Page</Link>
    </div>
  )
}

export default HomePage