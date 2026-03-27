import { useState } from "react";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import Ingredients from "./Ingredients/Ingredients";

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [ingredients, setIngredients] = useState([]);

    // this function below is for onDubmit
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
            <div className="mx-w-2xl mx-atuo border mt-10">
                {/* onSubmit={handleSubmit} inside form */}
                <form action={addIngredient} className="flex items-center justify-center gap-5">
                    <input type="text" 
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
            </div>

            <div className="w-[11/12] mx-atuo border mt-10">
                <h2 className="font-semibold text-2xl">Ingredients on hand:</h2>
                <div className="mt-4">
                    {
                        ingredients.map((ingredient, i)=>{
                            return <Ingredients
                            key={i}
                            ingredient={ingredient}
                            ></Ingredients>
                        })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Main;