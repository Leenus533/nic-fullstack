import React from "react"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { DataObject } from "../app/events/[type]/ApiReturn.types"
import EventDates from "./EventDates"

const EventCard = ({ prop }: { prop: DataObject }) => {
  return (
    <CardContainer className="flex flex-col">
      <CardBody className="relative flex flex-col text-gray-700 bg-white shadow-2xl m-4 bg-clip-border rounded-sm">
        <CardItem className="relative w-full h-[200px] overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            loading="lazy"
            decoding="async"
            className="absolute object-cover w-full h-full inset-0"
            src={`https://d2gloyfobyb8yo.cloudfront.net/dbimages/${
              prop.fields?.feature_image ||
              prop.fields?.large_image ||
              prop.fields?.thumbnail
            }`}
            alt={prop.fields?.title}
          />
        </CardItem>
        <CardItem className="font-sans text-xl sm:text-2xl antialiased leading-snug tracking-normal uppercase font-black text-black overflow-hidden">
          <h5>{prop.fields.title}</h5>
        </CardItem>
        <div className="flex-grow p-2">
          <EventDates prop={prop} />
        </div>
        <div className="p-4 sm:p-6 pt-0">
          <a
            target="+blank"
            href={`https://tickets.motorpointarenanottingham.com/shows/Show.aspx?sh=${prop.fields.content_id}`}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            Book Tickets
          </a>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default EventCard
