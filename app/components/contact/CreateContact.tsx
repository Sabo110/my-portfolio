import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"

export default function CreateContact() {
    return (
        <form action="" className="grid gap-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="text">Email</Label>
                <Input type="text" id="text" placeholder="Enter contact text (number, github name...)" />
            </div>
            <div>
                <Label htmlFor="text">Type</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="text">Email</Label>
                <Input type="text" id="text" placeholder="Enter contact text (number, github name...)" />
            </div>
            <Button type="submit">Button</Button>
        </form>
    )
}
