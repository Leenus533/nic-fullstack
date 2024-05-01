"use client"
import React, { Key } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"

const EventSelect = ({ eventType, eventTypes }: any) => {
  const router = useRouter()
  return (
    <div className="flex  justify-center items-center">
      <Select onValueChange={(e) => router.push(`${e}`)}>
        <SelectTrigger aria-label="Select event type" className="w-[180px]">
          <SelectValue
            placeholder={
              eventType === "regular"
                ? "All Events"
                : eventType.charAt(0).toUpperCase() + eventType.slice(1)
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Events</SelectLabel>
            {eventTypes.map((prop: string, key: Key) => (
              <SelectItem
                key={key}
                className="first-letter:capitalize"
                value={prop}
              >
                <p className="first-letter:capitalize">
                  {prop === "regular" ? "All Events" : prop}
                </p>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default EventSelect
