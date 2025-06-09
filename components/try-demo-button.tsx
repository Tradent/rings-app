"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useDemo } from "@/contexts/demo-context"

interface TryDemoButtonProps extends ButtonProps {}

export function TryDemoButton({ className, ...props }: TryDemoButtonProps) {
  const router = useRouter()
  const { enableDemoMode } = useDemo()

  const handleTryDemo = () => {
    enableDemoMode()
    router.push("/app")
  }

  return (
    <Button
      variant="outline"
      className={`border-gold-500 text-gold-400 hover:bg-gold-500/20 ${className}`}
      onClick={handleTryDemo}
      {...props}
    >
      Try Demo
    </Button>
  )
}
