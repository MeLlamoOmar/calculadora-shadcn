import type { Ingredient, Recipe } from "@/types/types"

// Ingredientes de ejemplo
export const mockIngredients: Ingredient[] = [
  { id: "ing-1", name: "Harina", unit: "g", quantity: 1000, price: 2.5, unitPrice: 0.0025 },
  { id: "ing-2", name: "Azúcar", unit: "g", quantity: 500, price: 1.8, unitPrice: 0.0036 },
  { id: "ing-3", name: "Huevos", unit: "Unidad", quantity: 12, price: 3.6, unitPrice: 0.3 },
  { id: "ing-4", name: "Leche", unit: "ml", quantity: 1000, price: 1.2, unitPrice: 0.0012 },
  { id: "ing-5", name: "Mantequilla", unit: "g", quantity: 250, price: 2.75, unitPrice: 0.011 },
  { id: "ing-6", name: "Chocolate", unit: "g", quantity: 200, price: 3.5, unitPrice: 0.0175 },
  { id: "ing-7", name: "Levadura", unit: "g", quantity: 100, price: 1.5, unitPrice: 0.015 },
  { id: "ing-8", name: "Sal", unit: "g", quantity: 500, price: 0.95, unitPrice: 0.0019 },
  { id: "ing-9", name: "Aceite de oliva", unit: "ml", quantity: 500, price: 5.75, unitPrice: 0.0115 },
  { id: "ing-10", name: "Tomates", unit: "Unidad", quantity: 6, price: 2.4, unitPrice: 0.4 },
  { id: "ing-11", name: "Cebolla", unit: "Unidad", quantity: 3, price: 1.2, unitPrice: 0.4 },
  { id: "ing-12", name: "Ajo", unit: "Unidad", quantity: 5, price: 1.0, unitPrice: 0.2 },
  { id: "ing-13", name: "Queso mozzarella", unit: "g", quantity: 250, price: 3.25, unitPrice: 0.013 },
  { id: "ing-14", name: "Albahaca", unit: "g", quantity: 30, price: 1.5, unitPrice: 0.05 },
  { id: "ing-15", name: "Arroz", unit: "g", quantity: 500, price: 2.1, unitPrice: 0.0042 },
  { id: "ing-16", name: "Caldo de pollo", unit: "ml", quantity: 1000, price: 2.8, unitPrice: 0.0028 },
  { id: "ing-17", name: "Champiñones", unit: "g", quantity: 250, price: 2.3, unitPrice: 0.0092 },
  { id: "ing-18", name: "Parmesano", unit: "g", quantity: 100, price: 4.5, unitPrice: 0.045 },
  { id: "ing-19", name: "Vino blanco", unit: "ml", quantity: 750, price: 6.95, unitPrice: 0.0093 },
  { id: "ing-20", name: "Limón", unit: "Unidad", quantity: 4, price: 1.6, unitPrice: 0.4 },
]

// Recetas de ejemplo
export const mockRecipes: Recipe[] = [
  {
    id: "rec-1",
    name: "Tarta de Chocolate",
    description:
      "Una deliciosa tarta de chocolate casera, perfecta para ocasiones especiales o para darse un capricho cualquier día de la semana.",
    ingredients: [
      { ingredientId: "ing-1", quantity: 200 },
      { ingredientId: "ing-2", quantity: 150 },
      { ingredientId: "ing-3", quantity: 3 },
      { ingredientId: "ing-5", quantity: 100 },
      { ingredientId: "ing-6", quantity: 200 },
    ],
  },
  {
    id: "rec-2",
    name: "Pizza Margarita",
    description:
      "La clásica pizza italiana con tomate, mozzarella y albahaca. Simple pero llena de sabor mediterráneo.",
    ingredients: [
      { ingredientId: "ing-1", quantity: 300 },
      { ingredientId: "ing-7", quantity: 7 },
      { ingredientId: "ing-8", quantity: 5 },
      { ingredientId: "ing-9", quantity: 15 },
      { ingredientId: "ing-10", quantity: 4 },
      { ingredientId: "ing-13", quantity: 200 },
      { ingredientId: "ing-14", quantity: 10 },
    ],
  },
  {
    id: "rec-3",
    name: "Risotto de Champiñones",
    description:
      "Un cremoso risotto italiano con champiñones frescos y queso parmesano. Ideal como plato principal o guarnición.",
    ingredients: [
      { ingredientId: "ing-15", quantity: 300 },
      { ingredientId: "ing-11", quantity: 1 },
      { ingredientId: "ing-12", quantity: 2 },
      { ingredientId: "ing-16", quantity: 750 },
      { ingredientId: "ing-17", quantity: 250 },
      { ingredientId: "ing-18", quantity: 50 },
      { ingredientId: "ing-19", quantity: 100 },
      { ingredientId: "ing-5", quantity: 30 },
    ],
  },
  {
    id: "rec-4",
    name: "Galletas de Mantequilla",
    description:
      "Galletas caseras de mantequilla, crujientes por fuera y suaves por dentro. Perfectas para acompañar el té o café.",
    ingredients: [
      { ingredientId: "ing-1", quantity: 250 },
      { ingredientId: "ing-2", quantity: 100 },
      { ingredientId: "ing-5", quantity: 150 },
      { ingredientId: "ing-3", quantity: 1 },
      { ingredientId: "ing-8", quantity: 2 },
    ],
  },
  {
    id: "rec-5",
    name: "Pasta al Limón",
    description:
      "Una pasta ligera y refrescante con salsa cremosa de limón. Lista en menos de 30 minutos, ideal para cenas rápidas.",
    ingredients: [
      { ingredientId: "ing-4", quantity: 100 },
      { ingredientId: "ing-5", quantity: 50 },
      { ingredientId: "ing-18", quantity: 75 },
      { ingredientId: "ing-20", quantity: 2 },
    ],
  },
]
