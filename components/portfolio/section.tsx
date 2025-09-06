import type { ReactNode } from "react"

export default function Section({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="px-6 md:px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
