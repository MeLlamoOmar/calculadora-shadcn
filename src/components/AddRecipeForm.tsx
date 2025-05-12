"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Recipe, Ingredient, RecipeIngredient } from "./RecipeCalculator"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Trash2 } from "lucide-react"

interface AddRecipeFormProps {
  onAddRecipe: (recipe: Omit<Recipe, "id">) => void
  ingredients: Ingredient[]
}

export default function AddRecipeForm({ onAddRecipe, ingredients }: AddRecipeFormProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [recipeIngredients, setRecipeIngredients] = useState<RecipeIngredient[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      alert("Please enter a recipe name")
      return
    }

    if (recipeIngredients.length === 0) {
      alert("Please add at least one ingredient")
      return
    }

    onAddRecipe({
      name,
      description,
      ingredients: recipeIngredients,
    })

    // Reset form
    setName("")
    setDescription("")
    setRecipeIngredients([])
  }

  const addIngredientToRecipe = () => {
    if (ingredients.length === 0) {
      alert("Please add ingredients first")
      return
    }

    setRecipeIngredients([
      ...recipeIngredients,
      {
        ingredientId: ingredients[0].id,
        quantity: 1,
      },
    ])
  }

  const updateIngredient = (index: number, field: keyof RecipeIngredient, value: any) => {
    const updated = [...recipeIngredients]
    updated[index] = { ...updated[index], [field]: value }
    setRecipeIngredients(updated)
  }

  const removeIngredient = (index: number) => {
    setRecipeIngredients(recipeIngredients.filter((_, i) => i !== index))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Recipe Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recipe name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description (optional)</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter recipe description"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Ingredients</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addIngredientToRecipe}
            className="flex items-center gap-1"
          >
            <PlusCircle className="h-4 w-4" />
            Add Ingredient
          </Button>
        </div>

        {recipeIngredients.length === 0 ? (
          <p className="text-sm text-muted-foreground">No ingredients added yet</p>
        ) : (
          <div className="space-y-3">
            {recipeIngredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2 items-end">
                <div className="w-24">
                  <Label htmlFor={`quantity-${index}`} className="text-xs">
                    Quantity
                  </Label>
                  <Input
                    id={`quantity-${index}`}
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={ingredient.quantity}
                    onChange={(e) => updateIngredient(index, "quantity", Number.parseFloat(e.target.value))}
                  />
                </div>

                <div className="flex-1">
                  <Label htmlFor={`ingredient-${index}`} className="text-xs">
                    Ingredient
                  </Label>
                  <Select
                    value={ingredient.ingredientId}
                    onValueChange={(value) => updateIngredient(index, "ingredientId", value)}
                  >
                    <SelectTrigger id={`ingredient-${index}`}>
                      <SelectValue placeholder="Select ingredient" />
                    </SelectTrigger>
                    <SelectContent>
                      {ingredients.map((ing) => (
                        <SelectItem key={ing.id} value={ing.id}>
                          {ing.name} ({ing.unit})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeIngredient(index)}
                  className="h-9 w-9 text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button type="submit" className="w-full">
        Add Recipe
      </Button>
    </form>
  )
}
