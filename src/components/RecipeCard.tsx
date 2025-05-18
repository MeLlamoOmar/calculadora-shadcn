import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Trash2, UtensilsCrossed } from "lucide-react"

import {type Ingredient, type Recipe } from "@/types/types"
import { Badge } from "./ui/badge"

interface RecipeCardProps {
  recipe: Recipe
  ingredients: Ingredient[]
  onDelete: (id: string) => void
  getUnit: (id: string) => string
  getName: (id: string) => string
}

const RecipeCard = ({recipe, onDelete, getUnit, getName, ingredients}: RecipeCardProps) => {
  const getIngredientCost = (id: string, quantity: number): number => {
    const ingredient = ingredients.find((i) => i.id === id)
    // console.log(ingredient ? `${ingredient?.name}: ${ingredient?.unitPrice} * ${quantity} = ${ingredient?.price * quantity}` : '')
    return ingredient ? ingredient.unitPrice * quantity : 0
  }

  const getRecipeTotalCost = (recipe: Recipe): number => {
    return recipe.ingredients.reduce((prevValue, currIng) => {
      return prevValue + getIngredientCost(currIng.ingredientId, currIng.quantity)
    },0)
  }
  
  return (
    <Card key={recipe.id} className="overflow-hidden">
          <CardHeader className="bg-muted/80">
            <div className="flex items-center justify-between">
              <CardTitle>{recipe.name}</CardTitle>
              <Button
                variant='ghost'
                size="icon"
                onClick={() => onDelete(recipe.id)}
                className="h-8 w-8 cursor-pointer"
              >
                <Trash2 className="text-destructive mt-0.5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-center text-muted-foreground mb-3">
              <UtensilsCrossed className="w-4 h-4" /> 
              <p className="text-sm">{recipe.ingredients.length} Ingredientes</p>
            </div>

            <p className="text-muted-foreground mb-4">{recipe.description}</p>

            <div className="bg-amber-50">
              <h3 className="text-amber-800 font-medium mb-2 flex items-center gap-2">
                <UtensilsCrossed />
                ingredients
              </h3>
              <ul className="space-y-2">
                { recipe.ingredients.map((ing, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-white">
                      {ing.quantity} {getUnit(ing.ingredientId)}
                    </Badge>
                    <span className="text-sm">{getName(ing.ingredientId)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex items-end h-full justify-end">
            <p className="text-right text-green-600 mt-5">RD$ {getRecipeTotalCost(recipe).toFixed(2)}</p>
          </CardFooter>
        </Card>
  )
}

export default RecipeCard