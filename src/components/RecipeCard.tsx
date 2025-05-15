import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"

import {type Recipe } from "@/types/types"

interface RecipeCardProps {
  recipe: Recipe
  totalCost: string
  onDelete: (id: string) => void
  getUnit: (id: string) => string
  getName: (id: string) => string
}

const RecipeCard = ({recipe, onDelete, getUnit, getName, totalCost}: RecipeCardProps) => {
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
          <CardContent className="">
            <p className="text-muted-foreground mb-4">{recipe.description}</p>
            <h3 className="font-medium text-sm mb-2">Ingredients:</h3>
            <ul className="space-y-1">
              {recipe.ingredients.map((ing, index) => (
                <li key={index} className="text-sm">
                  {ing.quantity} {getUnit(ing.ingredientId)} {getName(ing.ingredientId)}
                </li>
              ))}
            </ul>
            <p className="text-right text-green-600 mt-5">RD$ {totalCost}</p>
          </CardContent>
        </Card>
  )
}

export default RecipeCard