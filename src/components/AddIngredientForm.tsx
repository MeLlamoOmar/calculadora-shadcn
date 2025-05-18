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
  const [unit, setUnit] = useState<Unit | "">("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      alert("Please enter an ingredient name")
      return
    }

    if (!unit) {
      alert("Please select a unit of measurement")
      return
    }

    const unitPrice = price / quantity

    onAddIngredient({
      name,
      unit,
      quantity,
      price,
      unitPrice
    })

    // Reset form
    setName("")
    setUnit("")
    setPrice(0)
    setQuantity(0)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 h-full">
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

      <div className="space-y-2 grid sm:grid-cols-3 gap-x-3">
        <div className="w-full">
          <Label htmlFor="unit">Unit of Measurement</Label>
          <Select onValueChange={(value) => setUnit(value as Unit)} value={`${unit}`}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an Unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Units</SelectLabel>
                {
                  Object.values(UnitEnum).map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground text-left">Examples: g, kg, oz, ml, Unidad</p>
        </div>
        <div className="w-full">
          <Label htmlFor="precio">Price:</Label>
          <Input
            id="precio"
            type="number"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.valueAsNumber)}
            required
          />
        </div>
        <div className="w-full">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            placeholder="Enter quantity"
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
