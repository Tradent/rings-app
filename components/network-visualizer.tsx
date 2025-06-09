"use client"

import type React from "react"

import { useCallback, useState, useEffect, useRef } from "react"
import ReactFlow, {
  type Node,
  type Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  type NodeTypes,
  Panel,
} from "reactflow"
import "reactflow/dist/style.css"
import { UserNode } from "./user-node"
import { RippleNode } from "./ripple-node"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Filter, ChevronDown, ChevronUp } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { useDemo } from "@/contexts/demo-context"
import { demoDataService } from "@/lib/demo-data"

// Custom node types
const nodeTypes: NodeTypes = {
  user: UserNode,
  ripple: RippleNode,
}

// Sample data - in a real app, this would come from your Solana backend
const initialNodes: Node[] = [
  {
    id: "1",
    type: "user",
    data: {
      label: "You",
      connections: 24,
      influence: 85,
      image: "/abstract-profile.png",
    },
    position: { x: 250, y: 250 },
  },
  {
    id: "2",
    type: "user",
    data: {
      label: "John Smith",
      connections: 12,
      influence: 65,
      image: "/man-profile.png",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "user",
    data: {
      label: "Sarah Johnson",
      connections: 18,
      influence: 72,
      image: "/woman-profile.png",
    },
    position: { x: 400, y: 100 },
  },
  {
    id: "4",
    type: "ripple",
    data: {
      label: "Product Launch",
      reach: 1250,
      engagement: 320,
      active: true,
    },
    position: { x: 400, y: 400 },
  },
  {
    id: "5",
    type: "user",
    data: {
      label: "Michael Chen",
      connections: 15,
      influence: 58,
      image: "/man-profile.png",
    },
    position: { x: 100, y: 400 },
  },
  {
    id: "6",
    type: "user",
    data: {
      label: "Emma Wilson",
      connections: 22,
      influence: 78,
      image: "/woman-profile.png",
    },
    position: { x: 550, y: 250 },
  },
  {
    id: "7",
    type: "ripple",
    data: {
      label: "Networking Event",
      reach: 850,
      engagement: 210,
      active: false,
    },
    position: { x: 150, y: 250 },
  },
  {
    id: "8",
    type: "user",
    data: {
      label: "David Park",
      connections: 9,
      influence: 45,
      image: "/man-profile.png",
    },
    position: { x: 500, y: 400 },
  },
]

const initialEdges: Edge[] = [
  // Connections from "You" (central node)
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#64B5F6", strokeWidth: 3 },
    type: "smoothstep",
    data: { strength: 75 },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    style: { stroke: "#64B5F6", strokeWidth: 3 },
    type: "smoothstep",
    data: { strength: 85 },
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    animated: true,
    style: { stroke: "#FFAB00", strokeWidth: 4 },
    type: "smoothstep",
    data: { strength: 90 },
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    animated: true,
    style: { stroke: "#64B5F6", strokeWidth: 3 },
    type: "smoothstep",
    data: { strength: 70 },
  },
  {
    id: "e1-6",
    source: "1",
    target: "6",
    animated: true,
    style: { stroke: "#64B5F6", strokeWidth: 3 },
    type: "smoothstep",
    data: { strength: 80 },
  },
  {
    id: "e1-7",
    source: "1",
    target: "7",
    animated: true,
    style: { stroke: "#FFAB00", strokeWidth: 4 },
    type: "smoothstep",
    data: { strength: 95 },
  },

  // Connections between other nodes (creating a network)
  {
    id: "e2-3",
    source: "2",
    target: "3",
    style: { stroke: "#64B5F6", strokeWidth: 2 },
    type: "smoothstep",
    data: { strength: 60 },
  },
  {
    id: "e3-6",
    source: "3",
    target: "6",
    style: { stroke: "#64B5F6", strokeWidth: 2 },
    type: "smoothstep",
    data: { strength: 65 },
  },
  {
    id: "e5-2",
    source: "5",
    target: "2",
    style: { stroke: "#64B5F6", strokeWidth: 2 },
    type: "smoothstep",
    data: { strength: 55 },
  },
  {
    id: "e6-8",
    source: "6",
    target: "8",
    style: { stroke: "#64B5F6", strokeWidth: 2 },
    type: "smoothstep",
    data: { strength: 50 },
  },
  {
    id: "e8-4",
    source: "8",
    target: "4",
    style: { stroke: "#FFAB00", strokeWidth: 3 },
    type: "smoothstep",
    data: { strength: 75 },
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    style: { stroke: "#FFAB00", strokeWidth: 3 },
    type: "smoothstep",
    data: { strength: 80 },
  },
  {
    id: "e3-8",
    source: "3",
    target: "8",
    style: { stroke: "#64B5F6", strokeWidth: 2 },
    type: "smoothstep",
    data: { strength: 45 },
  },
]

export function NetworkVisualizer() {
  const svgRef = useRef(null)
  const { isDemoMode } = useDemo()
  const [networkData, setNetworkData] = useState({ nodes: [], links: [] })

  useEffect(() => {
    const fetchNetworkData = async () => {
      try {
        // In a real app, this would be an API call
        // For demo mode, use the mock data
        if (isDemoMode) {
          setNetworkData(demoDataService.getNetworkData())
        } else {
          // This would be a real API call in a production app
          // For now, we'll use the same mock data
          setNetworkData(demoDataService.getNetworkData())
        }
      } catch (error) {
        console.error("Error fetching network data:", error)
      }
    }

    fetchNetworkData()
  }, [isDemoMode])

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [relatedNodes, setRelatedNodes] = useState<Set<string>>(new Set())
  const [relatedEdges, setRelatedEdges] = useState<Set<string>>(new Set())

  const [showFilterPanel, setShowFilterPanel] = useState(false)
  const [nodeTypeFilters, setNodeTypeFilters] = useState({
    user: true,
    ripple: true,
  })
  const [minInfluence, setMinInfluence] = useState(0)
  const [activeFilters, setActiveFilters] = useState(0)
  const [filteredNodes, setFilteredNodes] = useState(nodes)
  const [filteredEdges, setFilteredEdges] = useState(edges)
  const [minConnectionStrength, setMinConnectionStrength] = useState(0)

  useEffect(() => {
    // Apply filters to nodes
    const newFilteredNodes = nodes.filter((node) => {
      // Filter by node type
      if (!nodeTypeFilters[node.type as keyof typeof nodeTypeFilters]) {
        return false
      }

      // Filter by influence for user nodes
      if (node.type === "user" && node.data.influence < minInfluence) {
        return false
      }

      return true
    })

    // Get IDs of filtered nodes
    const filteredNodeIds = new Set(newFilteredNodes.map((node) => node.id))

    // Filter edges to only include those connecting filtered nodes and meeting strength threshold
    const newFilteredEdges = edges.filter(
      (edge) =>
        filteredNodeIds.has(edge.source) &&
        filteredNodeIds.has(edge.target) &&
        (edge.data?.strength || 0) >= minConnectionStrength,
    )

    // Count active filters
    let activeFilterCount = 0
    if (!nodeTypeFilters.user || !nodeTypeFilters.ripple) activeFilterCount++
    if (minInfluence > 0) activeFilterCount++
    if (minConnectionStrength > 0) activeFilterCount++

    setActiveFilters(activeFilterCount)
    setFilteredNodes(newFilteredNodes)
    setFilteredEdges(newFilteredEdges)
  }, [nodes, edges, nodeTypeFilters, minInfluence, minConnectionStrength])

  // Handle node hover
  const onNodeMouseEnter = useCallback(
    (event: React.MouseEvent, node: Node) => {
      const nodeId = node.id
      setHoveredNode(nodeId)

      // Find connected nodes and edges
      const connectedNodes = new Set<string>()
      const connectedEdges = new Set<string>()

      edges.forEach((edge) => {
        if (edge.source === nodeId) {
          connectedNodes.add(edge.target)
          connectedEdges.add(edge.id)
        } else if (edge.target === nodeId) {
          connectedNodes.add(edge.source)
          connectedEdges.add(edge.id)
        }
      })

      setRelatedNodes(connectedNodes)
      setRelatedEdges(connectedEdges)
    },
    [edges],
  )

  const onNodeMouseLeave = useCallback(() => {
    setHoveredNode(null)
    setRelatedNodes(new Set())
    setRelatedEdges(new Set())
  }, [])

  // Style nodes based on hover state
  const getNodeStyle = useCallback(
    (node: Node) => {
      if (!hoveredNode) return {}

      if (node.id === hoveredNode) {
        return { zIndex: 1000, boxShadow: "0 0 10px 2px rgba(255, 171, 0, 0.8)" }
      }

      if (relatedNodes.has(node.id)) {
        return { zIndex: 999, boxShadow: "0 0 8px 1px rgba(100, 181, 246, 0.8)" }
      }

      return { opacity: 0.4 }
    },
    [hoveredNode, relatedNodes],
  )

  // Style edges based on hover state
  const getEdgeStyle = useCallback(
    (edge: Edge) => {
      if (!hoveredNode) return {}

      if (relatedEdges.has(edge.id)) {
        return {
          stroke: edge.style?.stroke || "#64B5F6",
          strokeWidth: ((edge.style?.strokeWidth as number) || 2) + 1,
          opacity: 1,
          zIndex: 1000,
        }
      }

      return { opacity: 0.2 }
    },
    [hoveredNode, relatedEdges],
  )

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    console.log("Node clicked:", node)
    // In a real app, you would show details about the node, etc.
  }, [])

  // Apply styles to nodes and edges based on hover state
  const styledNodes = nodes.map((node) => ({
    ...node,
    style: {
      ...node.style,
      ...getNodeStyle(node),
    },
  }))

  const styledEdges = edges.map((edge) => ({
    ...edge,
    style: {
      ...edge.style,
      ...getEdgeStyle(edge),
    },
  }))

  return (
    <div className="w-full h-full bg-slate-900/50 rounded-lg overflow-hidden">
      <svg ref={svgRef} className="w-full h-full" />
      <ReactFlow
        nodes={hoveredNode ? styledNodes : filteredNodes}
        edges={hoveredNode ? styledEdges : filteredEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.2}
        maxZoom={4}
        defaultEdgeOptions={{
          type: "smoothstep",
          animated: true,
          style: { strokeWidth: 2 },
        }}
        proOptions={{ hideAttribution: true }}
        connectionLineStyle={{ stroke: "#FFAB00", strokeWidth: 2 }}
        connectionLineType="smoothstep"
        snapToGrid={true}
        snapGrid={[15, 15]}
        nodesDraggable={true}
        elementsSelectable={true}
        selectNodesOnDrag={false}
        zoomOnScroll={true}
        zoomOnPinch={true}
        panOnScroll={true}
        panOnDrag={[1, 2]}
      >
        <Controls showInteractive={true} position="bottom-right" />
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "ripple") return "#FFAB00"
            return "#64B5F6"
          }}
          nodeColor={(n) => {
            if (n.type === "ripple") return "#FFAB00"
            return "#64B5F6"
          }}
          maskColor="rgba(0, 0, 0, 0.2)"
          borderRadius={8}
          position="top-right"
        />
        <Background variant="lines" gap={20} size={1} color="#333" />

        {/* Filter Panel */}
        <Panel position="top-left" className="bg-slate-800/90 p-3 rounded-lg border border-slate-700 text-white">
          <Collapsible open={showFilterPanel} onOpenChange={setShowFilterPanel}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gold-400" />
                <h3 className="text-sm font-medium">Filter Network</h3>
                {activeFilters > 0 && (
                  <Badge className="bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 border-none">
                    {activeFilters}
                  </Badge>
                )}
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
                  {showFilterPanel ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="mt-3 space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs font-medium text-slate-300">Node Type</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="filter-users"
                      checked={nodeTypeFilters.user}
                      onCheckedChange={(checked) => setNodeTypeFilters((prev) => ({ ...prev, user: !!checked }))}
                    />
                    <Label htmlFor="filter-users" className="text-sm">
                      Users
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="filter-ripples"
                      checked={nodeTypeFilters.ripple}
                      onCheckedChange={(checked) => setNodeTypeFilters((prev) => ({ ...prev, ripple: !!checked }))}
                    />
                    <Label htmlFor="filter-ripples" className="text-sm">
                      Ripples
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="text-xs font-medium text-slate-300">Minimum Influence</h4>
                  <span className="text-xs text-slate-400">{minInfluence}</span>
                </div>
                <Slider
                  min={0}
                  max={100}
                  step={5}
                  value={[minInfluence]}
                  onValueChange={(value) => setMinInfluence(value[0])}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="text-xs font-medium text-slate-300">Connection Strength</h4>
                  <span className="text-xs text-slate-400">{minConnectionStrength}</span>
                </div>
                <Slider
                  min={0}
                  max={100}
                  step={5}
                  value={[minConnectionStrength]}
                  onValueChange={(value) => setMinConnectionStrength(value[0])}
                  className="w-full"
                />
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-700"
                  onClick={() => {
                    setNodeTypeFilters({ user: true, ripple: true })
                    setMinInfluence(0)
                    setMinConnectionStrength(0)
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Panel>
      </ReactFlow>
    </div>
  )
}
