const IngredientsList = () => {
    return ( 
        <section className="w-full mt-8">
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
                <button onClick={handleGetRecipeBtn} className="btn bg-[#D17557] text-white">Get a recipe</button>
            </div>}
        </section>
     );
}
 
export default IngredientsList;