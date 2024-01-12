import {Ingredient} from '../../types';
import meatImage from '../../assets/meat.png';
import cheeseImage from '../../assets/cheese.png';
import baconImage from '../../assets/bacon.png';
import greenery from '../../assets/greenery.png';


export const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Bacon', price: 60, image: baconImage},
    {name: 'Greenery', price: 10, image: greenery},
];
