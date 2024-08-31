import React from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo({children, action}: {children: React.ReactNode, action: React.ReactNode}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {action}
            </PopoverTrigger>
            <PopoverContent className="w-80">
               {children}
            </PopoverContent>
        </Popover>
    )
}
