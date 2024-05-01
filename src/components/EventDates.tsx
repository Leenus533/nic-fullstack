//@ts-nocheck
import { DataObject } from "@/app/events/[type]/ApiReturn.types"
import { format, parseISO, getYear, getMonth } from "date-fns"

interface DateGroups {
  [key: string]: Date[]
}

const EventDates = ({ prop }: { prop: DataObject }) => {
  const formatDates = (dates: any[] | undefined) => {
    if (!dates || dates.length === 0) return ""

    const groupedDates = dates.reduce<DateGroups>(
      (acc: { [x: string]: Date[] }, date: string) => {
        const parsedDate = parseISO(date)
        const year = getYear(parsedDate)
        const month = getMonth(parsedDate)
        const key = `${year}-${month}`

        if (!acc[key]) {
          acc[key] = []
        }

        // Add only unique dates
        if (
          !acc[key].find(
            (d: any) =>
              format(d, "yyyy-MM-dd") === format(parsedDate, "yyyy-MM-dd")
          )
        ) {
          acc[key].push(parsedDate)
        }
        return acc
      },
      {}
    )

    const formattedDates: string[] = []

    Object.values(groupedDates).forEach((group) => {
      const sortedDates = group.sort((a: number, b: number) => a - b)
      const dateStrings = sortedDates.map((date: any) => format(date, "EEE d"))
      const lastDateString = dateStrings.pop()
      const monthYear = format(sortedDates[0], "MMMM yyyy") //

      const finalDateString =
        dateStrings.length > 0
          ? `${dateStrings.join(", ")} & ${lastDateString}`
          : lastDateString
      formattedDates.push(`${finalDateString} ${monthYear}`)
    })

    return formattedDates.join(", ")
  }

  const formattedDateString = formatDates(prop.fields?.dates)

  return <h5 className="text-sm sm:text-base">{formattedDateString}</h5>
}

export default EventDates
