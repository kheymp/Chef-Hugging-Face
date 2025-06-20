import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "./ai"

function Main() {
    const [ingredientsListItems, setIngredientsListItems] = useState([])
    const [recipeResponse, setRecipeResponse] = useState("")

    function handleAddIngredients(formData) {
        setIngredientsListItems(prevArray => [...prevArray, formData.get("ingredient")])
    }

    const [recipeShown, setRecipeShown] = useState(false)
    const [recipe, setRecipe] = useState("")
    const [loading, setLoading] = useState(false)
    
    async function getRecipe() {
        setLoading(true)
        const recipeMarkDown = await getRecipeFromMistral(ingredientsListItems)
        setLoading(false)
        setRecipe(recipeMarkDown)
    }

    return(
        <>
            <main>
                <form className="add-ingredient-form" action={handleAddIngredients}>
                    <input
                        type="text"
                        placeholder="e.g. oregano (add at least 4 ingredients)"
                        aria-label="Add ingredient"
                        name="ingredient"
                    ></input>
                    <button type="submit">Add ingredient</button>
                </form>

                
                {ingredientsListItems.length > 0 && <IngredientsList getRecipe={getRecipe} ingredientsListItems={ingredientsListItems} setRecipeShown={setRecipeShown} />}
                {loading && <h1 className="loading">Loading<span className="dots"></span></h1>}
                {recipe && <ClaudeRecipe recipe={recipe} setRecipe={setRecipe} setIngredientsListItems={setIngredientsListItems} />}

            </main>
        </>
    )
}

export default Main