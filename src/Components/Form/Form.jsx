import { FiPlusCircle } from "react-icons/fi";

const Form = ({addIngredient, setInputValue}) => {
    return ( 
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
     );
}
 
export default Form;