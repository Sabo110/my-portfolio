import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectSkeleton() {
    return (
        <div className="border rounded p-4 max-w-[350px] w-full flex flex-col gap-5 shadow-lg">
            <Skeleton className="h-[30px] w-full" />
            <Skeleton className="h-[100px] w-full" />
            <div className="flex flex-wrap gap-3">
                <Skeleton className="h-4 w-[70px]" />
                <Skeleton className="h-4 w-[70px]" />
                <Skeleton className="h-4 w-[70px]" />
            </div>
            <Skeleton className="h-4 w-4" />
        </div>
    )
}
