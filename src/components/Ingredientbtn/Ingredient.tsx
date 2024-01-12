import {IngredientProps} from '../../types';

function IngredientButton({ ingredient, setIngredients }: IngredientProps) {
    const Ingredient = () => {

        setIngredients((prevIngredients) => {

            const newIngredients = prevIngredients.map((item) => {

                if (item.name === ingredient.name) {
                    return {...item };
                } else {
                    return item;
                }
            });
            return newIngredients;
        });
    };
    return (
        <button onClick={Ingredient}>
            {`${ingredient.name} - ${ingredient.price} сом`}
        </button>
    );
}

export default IngredientButton;
