import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {

    const clearArray = () => {
        props.setIngredientsListItems([]); // set to an empty array
        props.setRecipe("")
    };

    return(
        <section className="suggested-recipe-container">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
            <button onClick={clearArray}>Clear Recipe</button>
        </section>
    )
}