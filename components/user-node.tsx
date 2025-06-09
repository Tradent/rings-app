import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import Image from "next/image"

interface UserNodeData {
  label: string
  connections: number
  influence: number
  image: string
}

export const UserNode = memo(({ data }: NodeProps<UserNodeData>) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-xl bg-white text-slate-800 border-2 border-slate-300">
      <div className="flex items-center">
        <div className="rounded-full w-10 h-10 overflow-hidden mr-2">
          <Image
            src={data.image || "/placeholder.svg"}
            alt={data.label}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-bold">{data.label}</div>
          <div className="text-xs text-slate-500">{data.connections} connections</div>
        </div>
      </div>
      <div className="mt-2">
        <div className="text-xs font-semibold">Influence Score</div>
        <div className="w-full bg-slate-200 rounded-full h-2 mt-1">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${data.influence}%` }} />
        </div>
      </div>
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-blue-500" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-blue-500" />
    </div>
  )
})

UserNode.displayName = "UserNode"
