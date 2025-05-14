"use client"

import { useState } from "react"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import RecipeList from "@/components/RecipeList"
import IngredientList from "@/components/IngredientList"
import AddRecipeForm from "@/components/AddRecipeForm"
import AddIngredientForm from "@/components/AddIngredientForm"

import type { Recipe, Ingredient } from "@/types/types"

export default function RecipeCalculator() {
  // State for recipes and ingredients
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [activeTab, setActiveTab] = useState("recipes")

  // Function to add a new recipe
  const addRecipe = (recipe: Omit<Recipe, "id">) => {
    const newRecipe = {
      ...recipe,
      id: Date.now().toString(),
    }
    setRecipes([...recipes, newRecipe])
    setActiveTab("recipes")
  }

  // Function to add a new ingredient
  const addIngredient = (ingredient: Omit<Ingredient, "id">) => {
    const newIngredient = {
      ...ingredient,
      id: Date.now().toString(),
    }
    console.table(newIngredient)
    setIngredients([...ingredients, newIngredient])
  }

  // Function to delete a recipe
  const deleteRecipe = (id: string) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  // Function to delete an ingredient
  const deleteIngredient = (id: string) => {
    // Check if ingredient is used in any recipe
    const isUsed = recipes.some((recipe) => recipe.ingredients.some((ing) => ing.ingredientId === id))

    if (isUsed) {
      alert("This ingredient is used in recipes and cannot be deleted.")
      return
    }

    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id))
  }

  return (
    <Card className="p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="add">Add New</TabsTrigger>
        </TabsList>

        <TabsContent value="recipes">
          <RecipeList recipes={recipes} ingredients={ingredients} onDelete={deleteRecipe} />
        </TabsContent>

        <TabsContent value="ingredients">
          <IngredientList ingredients={ingredients} onDelete={deleteIngredient} />
        </TabsContent>

        <TabsContent value="add">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-medium mb-4">Add Recipe</h2>
              <AddRecipeForm onAddRecipe={addRecipe} ingredients={ingredients} />
            </div>
            <div>
              <h2 className="text-xl font-medium mb-4">Add Ingredient</h2>
              <AddIngredientForm onAddIngredient={addIngredient} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
