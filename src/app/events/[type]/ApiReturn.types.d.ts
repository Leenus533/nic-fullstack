interface EventFields {
  offsale_date: string // ISO 8601 date string
  region_code: string
  is_ticket_exchange_enabled: string // "0" or "1"
  has_web_sales_dates: string // "0" or "1"
  keywords?: string
  show_id: string
  venue_timezone: string //  "0.0 || 1.0 "
  venue_name: string
  venue_postcode: string
  use_when_dates: string // "True" or "False"
  publishing_level: string
  thumbnail?: string
  venue_state: string
  large_image?: string
  product_types: string[]
  venue_location: string // "latitude,longitude"
  venue_code: string
  onsale_date: string // ISO 8601 date string
  is_sold_out: string // "0" or "1"
  date: string // ISO 8601 date string
  venue_address: string
  purchase: string // URL
  allow_refund: string // "True" or "False"
  product_id: string
  content_ids: string[]
  title: string
  seller_info_datetime: string // ISO 8601 date string
  is_retired: string // "0" or "1"
  content_id: string
  genre?: string[]
  description?: string
  when?: string
  category_ids?: string[]
  feature_image?: string
  marketing_types?: string
  alert_message?: string
  suitesAvailable?: boolean
  dates?: string[]
  whenArray?: string[]
  event_types?: string[]
}

interface DataObject {
  id: string
  fields: EventFields
}

export { DataObject, EventFields }
