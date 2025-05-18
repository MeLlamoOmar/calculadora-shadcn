"use client"

import type { Recipe, Ingredient } from "@/types/types"
import RecipeCard from "./RecipeCard"


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

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No recipes added yet. Go to the "Add New" tab to create your first recipe.
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} getName={getIngredientName} getUnit={getIngredientUnit} onDelete={onDelete} ingredients={ingredients}/>
      ))}
    </div>
  )
}
