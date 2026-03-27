import { useState } from "react";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import IngredientsList from "../IngredientsList/IngredientsList";
import Form from "../Form/Form";
import { getRecipeFromChefGemini } from "../../../UI/AI";

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const [recipe, setRecipe] = React.useState('')
    
    const getRecipeBtn = async ()=>{
        const recipeByAi = await getRecipeFromChefGemini(ingredients)
        setRecipe(recipeByAi)
    }

    // this function below is for onSubmit
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim() === ''){
            return;
        }
        setIngredients([...ingredients, inputValue]);
        // setIngredients(prev => [...prev, inputValue]); this is more pro.
        setInputValue('');
    }

    // this function below is for action attribute
    // currently active fucntion
    const addIngredient=(formData)=>{
        const newIngredient = formData.get('ingredient')
        if(newIngredient.trim() === ''){
            return;
        }
        setIngredients(prevIngredients=> [...prevIngredients, newIngredient]);
        // setInputValue('');
    }

    return ( 
        <div>
            <main className="max-w-2xl mx-auto w-full px-4 mt-8">
                {/* onSubmit={handleSubmit} inside form */}
                <Form
                addIngredient={addIngredient}
                setInputValue={setInputValue}
                ></Form>

                {ingredients.length > 0 && <IngredientsList 
                ingredients={ingredients}
                getRecipeBtn={getRecipeBtn}
                ></IngredientsList>}

                {recipe && <ClaudeRecipe recipe={recipe}></ClaudeRecipe>}
            </main>

        </div>
     );
}
 
export default Main;