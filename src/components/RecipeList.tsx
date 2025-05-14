"use client"

import type { Recipe, Ingredient } from "@/types/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface RecipeListProps {
  recipes: Recipe[]
  ingredients: Ingredient[]
  onDelete: (id: string) => void
}

export default function RecipeList({ recipes, ingredients, onDelete }: RecipeListProps) {
  // Function to get ingredient name
  const getIngredientName = (id: string): string => {
    const ingredient = ingredients.find((i) => i.id === id)
    return ingredient ? ingredient.name : "Unknown Ingredient"
  }

  // Function to get ingredient unit
  const getIngredientUnit = (id: string): string => {
    const ingredient = ingredients.find((i) => i.id === id)
    return ingredient ? ingredient.unit : ""
  }

  const getTotalRecipeCost = (): number => {
    let totalCost = 0
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((Iingredient) => {
        const ingredient = ingredients.find((i) => i.id === Iingredient.ingredientId)
        if(ingredient) {
          totalCost += ingredient.unitPrice * Iingredient.quantity
        }
      })
    })

    return totalCost
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No recipes added yet. Go to the "Add New" tab to create your first recipe.
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {recipes.map((recipe) => (
        <Card key={recipe.id} className="overflow-hidden">
          <CardHeader className="bg-muted/50">
            <div className="flex justify-between items-start">
              <CardTitle>{recipe.name}</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(recipe.id)}
                className="h-8 w-8 text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-muted-foreground mb-4">{recipe.description}</p>
            <h3 className="font-medium text-sm mb-2">Ingredients:</h3>
            <ul className="space-y-1">
              {recipe.ingredients.map((ing, index) => (
                <li key={index} className="text-sm">
                  {ing.quantity} {getIngredientUnit(ing.ingredientId)} {getIngredientName(ing.ingredientId)}
                </li>
              ))}
            </ul>
            <p>RD$ {getTotalRecipeCost().toString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
