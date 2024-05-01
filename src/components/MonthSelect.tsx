import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface EventCountPerMonth {
  [key: string]: number
}

interface MonthOption {
  id: string
  name: string
}

const generateMonthOption = (
  year: number,
  monthIndex: number,
  eventCountPerMonth: EventCountPerMonth
): MonthOption => {
  const monthKey = `${year}-${monthIndex + 1}`
  const eventCount = eventCountPerMonth[monthKey] || 0
  return {
    id: monthKey,
    name: `${new Date(year, monthIndex).toLocaleString("default", {
      month: "long",
    })} ${year} (${eventCount} events)`,
  }
}

const generateMonthOptions = (eventCountPerMonth: EventCountPerMonth) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1 // Month is 0-indexed in JS Date
  const nextYear = currentYear + 1

  const months = [
    { id: "0", name: "All Months" },
    ...Array.from({ length: 12 }, (_, i) =>
      generateMonthOption(currentYear, i, eventCountPerMonth)
    ),
    ...Array.from({ length: 12 }, (_, i) =>
      generateMonthOption(nextYear, i, eventCountPerMonth)
    ),
  ]

  return months.filter(
    ({ id }) =>
      id === "0" ||
      parseInt(id.split("-")[0]) > currentYear ||
      (parseInt(id.split("-")[0]) === currentYear &&
        parseInt(id.split("-")[1]) >= currentMonth)
  )
}

const MonthSelect = ({
  selectedMonth,
  setSelectedMonth,
  eventCountPerMonth,
}: {
  selectedMonth: string
  setSelectedMonth: (month: string) => void
  eventCountPerMonth: EventCountPerMonth
}) => {
  const monthOptions = generateMonthOptions(eventCountPerMonth)

  return (
    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
      <SelectTrigger aria-label="Filter by month" className="w-[220px]">
        <SelectValue placeholder="Select a month" />
      </SelectTrigger>
      <SelectContent>
        {monthOptions.map((month) => (
          <SelectItem key={month.id} value={month.id}>
            {month.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default MonthSelect
