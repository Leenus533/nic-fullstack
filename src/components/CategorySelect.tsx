import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import React from "react"

interface CategorySelectProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  categoryCount: { [key: string]: number }
  totalCount: number
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategory,
  setSelectedCategory,
  categoryCount,
  totalCount,
}) => {
  const categories = [
    "All",
    "Concerts",
    "Experiences",
    "Family",
    "Sport",
    "Music",
    "Comedy/Podcast",
  ]

  return (
    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
      <SelectTrigger aria-label="Filter by Category" className="w-[220px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((genre) => (
          <SelectItem key={genre} value={genre}>
            {genre === "All" ? "All Categories" : genre} (
            {categoryCount[genre] || totalCount})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CategorySelect
