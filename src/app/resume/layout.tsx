import type { ReactNode } from "react"

export default function ResumeCheckerLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Your existing navbar would go here */}
      <main>{children}</main>
    </div>
  )
}
