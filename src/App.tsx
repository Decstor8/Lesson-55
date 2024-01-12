import {INGREDIENTS} from "./components/Ingredients/Ingredients.ts";

function App() {
    return (
        <div>
            {INGREDIENTS.map(ing => (
                <div key={ing.name}>
                    <img style={{maxWidth: '200px'}} src={ing.image}/>
                    <span>{ing.name}</span>
                </div>
            ))}
        </div>
    );
}

export default App;