import { FiPlusCircle } from "react-icons/fi";

const Main = () => {
    return ( 
        <div>
            <form action="" className="flex items-center justify-center gap-5 mt-10">
                <input type="text" 
                placeholder="e.g. oregano" 
                className="input input-bordered join-item"/>
                <button className="btn btn-neutral flex items-center gap-1">
                    <FiPlusCircle></FiPlusCircle> Add ingredient
                </button>
            </form>
        </div>
     );
}
 
export default Main;