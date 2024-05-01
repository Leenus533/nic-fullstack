//@ts-nocheck
import { DataObject } from "@/app/events/[type]/ApiReturn.types"
import config from "@/../../config.json"

function combineObjects(data: DataObject[]): DataObject[] {
  const currentDate = new Date()
  const groupedEvents: { [key: string]: DataObject } = {}
  const definedEventTypes = config.eventTypes

  data.forEach((event) => {
    const offSaleDate = new Date(event.fields.offsale_date)
    const onSaleDate = new Date(event.fields.onsale_date)
    const when = event.fields.when?.toLowerCase() || ""

    if (offSaleDate > currentDate && currentDate > onSaleDate) {
      const key: string = event.fields.thumbnail // Grouping by content ID and thumbnail

      if (!groupedEvents[key]) {
        groupedEvents[key] = {
          ...event,
          fields: {
            ...event.fields,
            dates: [event.fields.date],
            event_types: [],
          },
        }

        definedEventTypes.forEach((type) => {
          if (
            when.includes(type) &&
            !groupedEvents[key].fields.event_types.includes(type)
          ) {
            groupedEvents[key].fields.event_types.push(type)
          }
        })

        if (groupedEvents[key].fields.event_types.length === 0) {
          groupedEvents[key].fields.event_types.push("regular")
        }
      } else {
        groupedEvents[key].fields.dates.push(event.fields.date)
        definedEventTypes.forEach((type) => {
          if (
            when.includes(type) &&
            !groupedEvents[key].fields.event_types.includes(type)
          ) {
            groupedEvents[key].fields.event_types.push(type)
          }
        })
      }
    }
  })

  return Object.values(groupedEvents).map((event) => {
    return event
  })
}

export { combineObjects }
