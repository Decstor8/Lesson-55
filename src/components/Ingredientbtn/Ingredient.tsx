import { INGREDIENTS } from '../../components/Ingredients/Ingredients.ts';

type IngredientsState = Record<string, number>;

export const resultPrice = (ingredients: IngredientsState): number => {
    return INGREDIENTS.reduce((total, ingredient) => {
        const count = ingredients[ingredient.name];
        return total + (count || 0) * ingredient.price;
    }, 30);
};

export const addIngredient = (
    ingredient: string,
    setIngredients: React.Dispatch<React.SetStateAction<IngredientsState>>
)=> {
    setIngredients(prevIngredients => ({
        ...prevIngredients,
        [ingredient]: (prevIngredients[ingredient] || 0) + 1
    }));
};

export const removeIngredient = (
    ingredient: string,
    setIngredients: React.Dispatch<React.SetStateAction<IngredientsState>>
): void => {
    setIngredients(prevIngredients => {
        const currentCount = prevIngredients[ingredient];

        if (currentCount && currentCount > 0) {
            return {
                ...prevIngredients,
                [ingredient]: currentCount - 1
            };
        } else {
            return prevIngredients;
        }
    });
};
