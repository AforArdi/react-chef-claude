import { VscDebugBreakpointData } from "react-icons/vsc";

const Ingredients = ({ingredient}) => {
    return ( 
        <div>
            <ul>
                <li className="flex items-center gap-2 text-2xl">
                    <VscDebugBreakpointData></VscDebugBreakpointData>
                    {ingredient}
                </li>
            </ul>
        </div>
     );
}
 
export default Ingredients;