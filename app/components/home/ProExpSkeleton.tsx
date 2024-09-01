import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
export default function ProExpSkeleton() {
    return (
        <div className="border rounded shadow-xl p-3 flex flex-col gap-3 h-[100px]">
            <Skeleton className="h-[12px] w-full" />
            <Skeleton className="h-[12px] w-full" />
            <Skeleton className="h-[12px] w-full" />
            <Skeleton className="h-[12px] w-full" />
        </div>
    )
}
