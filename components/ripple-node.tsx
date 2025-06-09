import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { Waves } from "lucide-react"

interface RippleNodeData {
  label: string
  reach: number
  engagement: number
  active: boolean
}

export const RippleNode = memo(({ data }: NodeProps<RippleNodeData>) => {
  return (
    <div
      className={`px-4 py-2 shadow-md rounded-xl ${data.active ? "bg-gold-50/10 border-2 border-gold-300" : "bg-slate-50 border-2 border-slate-300"} text-slate-800`}
    >
      <div className="flex items-center">
        <div
          className={`rounded-full w-8 h-8 flex items-center justify-center ${data.active ? "bg-gold-100/20 text-gold-400" : "bg-slate-100 text-slate-500"} mr-2`}
        >
          <Waves size={16} />
        </div>
        <div>
          <div className="font-bold">{data.label}</div>
          <div className="text-xs text-slate-500">{data.active ? "Active Campaign" : "Completed Campaign"}</div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
        <div>
          <span className="font-semibold">Reach:</span> {data.reach.toLocaleString()}
        </div>
        <div>
          <span className="font-semibold">Engagement:</span> {data.engagement.toLocaleString()}
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className={`w-2 h-2 ${data.active ? "bg-gold-500" : "bg-slate-500"}`}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className={`w-2 h-2 ${data.active ? "bg-gold-500" : "bg-slate-500"}`}
      />
    </div>
  )
})

RippleNode.displayName = "RippleNode"
