export default function IngredientsList(props) {
    return(
        <section>
            <h2>Ingredients on hand: </h2>
            <ul className="ingredients-list" aria-live="polite">{props.ingredientsListItems.map((item, key) => <li key={key}>{item}</li>)}</ul>
            
            {   
                props.ingredientsListItems.length >=4 &&
                <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}