import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import React from "react"

export default function Dialoge({children, title, action}: {children: React.ReactNode, title: string, action: React.ReactNode}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {action}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-full">
                <DialogHeader>
                    <DialogTitle> {title} </DialogTitle>
                    <DialogDescription>
                        
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}
