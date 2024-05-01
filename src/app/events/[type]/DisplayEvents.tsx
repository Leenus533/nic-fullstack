"use client"
import { DataObject } from "@/app/events/[type]/ApiReturn.types"
import EventSelect from "@/components/EventSelect"
import { Input } from "@/components/ui/input"
import { Key, useState } from "react"
import Fuse from "fuse.js"
import EventCard from "../../../components/EventCard"
import MonthSelect from "@/components/MonthSelect"

const DisplayEvents = ({
  data,
  eventType,
  eventTypes,
}: {
  data: DataObject[]
  eventType: string
  eventTypes: string[]
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMonth, setSelectedMonth] = useState("0")

  const eventCountPerMonth: { [key: string]: Set<string> } = {}

  // Calculate event count per month for all events
  data.forEach((prop: DataObject) => {
    const eventDates = prop.fields.dates || [prop.fields.date] // Use dates array if available or fallback to date

    eventDates.forEach((date) => {
      const eventDate = new Date(date)
      const eventYear = eventDate.getFullYear()
      const eventMonth = eventDate.getMonth() + 1
      const monthKey = `${eventYear}-${eventMonth}`
      if (!eventCountPerMonth[monthKey]) {
        eventCountPerMonth[monthKey] = new Set()
      }
      eventCountPerMonth[monthKey].add(prop.id) // Add event ID to the set
    })
  })

  // Convert each Set to its size (number of unique events per month)
  const uniqueEventCountPerMonth: { [key: string]: number } = {}
  Object.keys(eventCountPerMonth).forEach((key) => {
    uniqueEventCountPerMonth[key] = eventCountPerMonth[key].size
  })

  const filteredData = data.filter((prop: DataObject) => {
    const eventDates = prop.fields.dates || [prop.fields.date]

    return eventDates.some((date) => {
      const eventDate = new Date(date)
      const eventYear = eventDate.getFullYear()
      const eventMonth = eventDate.getMonth() + 1

      const [selectedYear, selectedMonthId] = selectedMonth.split("-")
      const isCorrectMonth =
        selectedMonth === "0"
          ? true
          : eventYear === parseInt(selectedYear) &&
            eventMonth === parseInt(selectedMonthId)

      const isCorrectType =
        eventType === "regular"
          ? true
          : prop.fields.event_types &&
            prop.fields.event_types.includes(eventType.toLowerCase()) //

      return isCorrectMonth && isCorrectType
    })
  })

  const fuse = new Fuse(filteredData, {
    keys: ["fields.title"],
    threshold: 0.3,
  })

  const searchResults = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : filteredData

  return (
    <div>
      <div className="flex items-center justify-around text-black py-4 border-b-2 border-gray-300 border-solid mb-2 rounded">
        <EventSelect eventType={eventType} eventTypes={eventTypes} />
        <MonthSelect
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          eventCountPerMonth={uniqueEventCountPerMonth}
        />
        <Input
          className="max-w-52"
          type="search"
          placeholder="search event..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredData.length > 0 ? (
          searchResults.length > 0 ? (
            searchResults.map((prop: DataObject, key: Key) => (
              <EventCard key={key} prop={prop} />
            ))
          ) : (
            <div className="flex flex-col w-max items-center justify-center py-8  px-">
              <img src="https://www.motorpointarenanottingham.com/wp-content/uploads/2023/03/404.png" />
              <h1 className=" text-4xl text-orange-600  text-center font-black uppercase mt-20">
                We cant seem to find what you are looking for
              </h1>
            </div>
          )
        ) : selectedMonth !== "0" ? (
          <div className="flex flex-col w-max items-center justify-center py-8  px-">
            <img src="https://www.motorpointarenanottingham.com/wp-content/uploads/2023/03/404.png" />
            <h1 className=" text-4xl text-orange-600  text-center font-black uppercase mt-20">
              {eventType === "regular"
                ? "No events available during the selected month"
                : "Sorry, No events of this type during this month"}{" "}
            </h1>
          </div>
        ) : (
          <div className="flex flex-col w-max items-center justify-center py-8  px-">
            <h1 className=" text-4xl   text-center font-black first-letter:capitalize mt-20">
              {eventType} Events will be coming soon...
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default DisplayEvents
