export type Unit = 'g' | 'kg' | 'oz' | 'ml' | 'Unidad'

export interface Ingredient {
  id: string
  name: string
  unit: Unit
  quantity: number
  price: number
}

export interface Recipe {
  id: string
  name: string
  description: string
  ingredients: RecipeIngredient[]
}

export interface RecipeIngredient {
  ingredientId: string
  quantity: number
}

export const UnitEnum = {
  g: 'g',
  kg: 'kg',
  oz: 'oz',
  ml: 'ml',
  Unidad: 'Unidad'
} as const;

export type UnitEnum = typeof UnitEnum[keyof typeof UnitEnum];