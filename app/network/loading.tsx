import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <Skeleton className="h-10 w-48 bg-slate-700" />
        <Skeleton className="h-10 w-36 bg-slate-700" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <Skeleton className="h-10 flex-1 bg-slate-700" />
          <Skeleton className="h-10 w-24 bg-slate-700" />
        </div>

        <div className="w-full">
          <Skeleton className="h-10 w-full max-w-md mb-8 bg-slate-700" />
          <Skeleton className="h-[600px] w-full bg-slate-700" />
        </div>
      </div>
    </div>
  )
}
