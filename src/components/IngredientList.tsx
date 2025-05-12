"use client"

import type { Ingredient } from "@/types/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface IngredientListProps {
  ingredients: Ingredient[]
  onDelete: (id: string) => void
}

export default function IngredientList({ ingredients, onDelete }: IngredientListProps) {
  if (ingredients.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No ingredients added yet. Go to the "Add New" tab to add your first ingredient.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 px-4 py-2 font-medium text-sm">
        <div className="col-span-5">Name</div>
        <div className="col-span-5">Unit</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      {ingredients.map((ingredient) => (
        <Card key={ingredient.id}>
          <CardContent className="p-4">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-5">{ingredient.name}</div>
              <div className="col-span-5">{ingredient.unit}</div>
              <div className="col-span-2 text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(ingredient.id)}
                  className="h-8 w-8 text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
