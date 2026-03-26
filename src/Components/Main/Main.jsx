import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Ingredients from "./Ingredients/Ingredients";

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim() === ''){
            return;
        }
        setIngredients([...ingredients, inputValue]);
        setInputValue('');
    }

    return ( 
        <div>
            <div className="mx-w-2xl mx-atuo border mt-10">
                <form onSubmit={handleSubmit} action="" className="flex items-center justify-center gap-5">
                    <input type="text" 
                    placeholder="e.g. oregano" 
                    className="input input-bordered join-item"
                    value={inputValue}
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