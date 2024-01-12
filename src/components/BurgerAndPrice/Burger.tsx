import React from 'react';

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
                    <div key={ingredient} className={`Ингредиент ${ingredient}`} />
                );
            }
        }
    }

    return <div className="burger">{burger}</div>;
};


export default Burger;
