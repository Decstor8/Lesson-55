import React from 'react';
import '../../styleBurger/burgerStyle.css';

type BurgerProps = {
    ingredients: Record<string, number>;
};

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
    const burger: JSX.Element[] = [];

    for (const ingredient in ingredients) {

        if (ingredient) {
            const count = ingredients[ingredient];
            for (let i = 0; i < count; i++) {
                burger.push(
                    <div key={ingredient} className={ingredient} />
                );
            }
        }
    }

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {burger}
            <div className="BreadBottom"></div>
        </div>
    );
};


export default Burger;
