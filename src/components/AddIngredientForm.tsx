"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {type Unit, type Ingredient, UnitEnum } from "@/types/types"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select"

interface AddIngredientFormProps {
  onAddIngredient: (ingredient: Omit<Ingredient, "id">) => void
}

export default function AddIngredientForm({ onAddIngredient }: AddIngredientFormProps) {
  const [name, setName] = useState("")
  const [unit, setUnit] = useState<Unit | null>(null)
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      alert("Please enter an ingredient name")
      return
    }

    if (!unit) {
      alert("Please enter a unit of measurement")
      return
    }

    onAddIngredient({
      name,
      unit,
      quantity
    })

    // Reset form
    setName("")
    setUnit(null)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="ingredient-name">Ingredient Name</Label>
        <Input
          id="ingredient-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter ingredient name"
          required
        />
      </div>

      <div className="space-y-2 flex space-x-5">
        <div>
          <Label htmlFor="unit">Unit of Measurement</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an Unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Units</SelectLabel>
                {
                  Object.values(UnitEnum).map((unit) => (
                    <SelectItem key={unit} value={unit} onClick={() => setUnit(unit as Unit)}>
                      {unit}
                    </SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">Examples: g, kg, oz, ml, Unidad</p>
        </div>
        <div>
          <Label htmlFor="precio">Price:</Label>
          <Input
            id="precio"
            type="number"
            placeholder="Enter Price"
            className="w-[180px]"
            value={price}
            onChange={(e) => setPrice(e.target.valueAsNumber)}
            required
          />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            placeholder="Enter quantity"
            className="w-[180px]"
            value={quantity}
            onChange={(e) => setQuantity(e.target.valueAsNumber)}
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Add Ingredient
      </Button>
    </form>
  )
}
