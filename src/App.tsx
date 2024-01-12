import * as React from 'react';
import './App.css';
import { INGREDIENTS } from './components/Ingredients/Ingredients';
import Burger from './components/BurgerAndPrice/Burger';
import { resultPrice, addIngredient, removeIngredient } from './components/Ingredientbtn/Ingredient.tsx';

const App: React.FC = () => {
    const [ingredients, setIngredients] = React.useState<Record<string, number>>({
        Meat: 0,
        Cheese: 0,
        Bacon: 0,
        Salad: 0
    });

    return (
        <div className="app">
            <div className="ingredient-buttons">
                {INGREDIENTS.map(ingredient => (
                    <div key={ingredient.name} className="ingredient-button">
                        <button onClick={() => addIngredient(ingredient.name, setIngredients)}>
                            <img src={ingredient.image} alt={ingredient.name} />
                            {ingredient.name}
                        </button>
                        <div className="ingredients-two">x{ingredients[ingredient.name]}</div>
                        <button onClick={() => removeIngredient(ingredient.name, setIngredients)} className="remove-button"></button>
                    </div>
                ))}
            </div>
            <div className='modal-burger'>
            <Burger ingredients={ingredients} />
            <div className="total-price">К оплате: {resultPrice(ingredients)} сом</div>
            </div>
        </div>
    );
};

export default App;
