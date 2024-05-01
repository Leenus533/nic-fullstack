import { getOrSetCache } from "@/lib/extractedFunctions"
import config from "@/../../config.json"
import DisplayEvents from "@/app/events/[type]/DisplayEvents"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

async function getData() {
  const data = await getOrSetCache(`ticketekData`)
  return { data }
}

export default async function EventsPage({
  params,
}: {
  params: { type: string }
}) {
  const { type } = params
  const { data } = await getData()
  const eventTypes = config.eventTypes

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex-grow">
        <DisplayEvents data={data} eventType={type} eventTypes={eventTypes} />
      </main>
      <Footer />
    </div>
  )
}
