import { useState } from "react";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import IngredientsList from "../IngredientsList/IngredientsList";

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const [recipeShown, setRecipeShown] = React.useState(false)
    
    const handleGetRecipeBtn=()=>{
        setRecipeShown(prev=> !prev);
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
                <form action={addIngredient} className="flex items-center justify-center gap-5">
                    <input 
                    type="text" 
                    name="ingredient"
                    placeholder="e.g. oregano" 
                    className="input input-bordered join-item"
                    // value={inputValue} don't need this when using the action, and formData method
                    onChange={(e)=>setInputValue(e.target.value)}
                    />
                    <button type="submit" className="btn btn-neutral flex items-center gap-1">
                        <FiPlusCircle></FiPlusCircle> Add ingredient
                    </button>
                </form>

                {ingredients.length > 0 && <IngredientsList 
                ingredients={ingredients}
                handleGetRecipeBtn={handleGetRecipeBtn}                ></IngredientsList>}

                {recipeShown && <ClaudeRecipe></ClaudeRecipe>}
            </main>

        </div>
     );
}
 
export default Main;