import React from "react";

export interface Ingredient {
    name: string;
    price: number;
    image: string;
}

export interface IngredientProps {
    ingredient: Ingredient;
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}