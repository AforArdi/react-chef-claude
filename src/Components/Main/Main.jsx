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

                {ingredients.length > 0 && <section className="w-full mt-8">
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
                    {ingredients.length > 3 && <div className="flex justify-between items-center bg-[#6b728028] p-6 rounded-md mt-6">
                        <div>
                            <p className="text-[20px] font-semibold">Ready for a recipe?</p>
                            <p className="text-[16px]">Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button className="btn bg-[#D17557] text-white">Get a recipe</button>
                    </div>}
                </section>}
            </main>
            
        </div>
     );
}
 
export default Main;