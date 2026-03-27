import ReactMarkdown from "react-markdown";

const ClaudeRecipe = ({recipe}) => {
    return ( 
        <section className="mt-6 text-[##475467] text-[18px]">
            <h2 className="font-semibold text-2xl">Chef Gemini Recommends:</h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
     );
}
 
export default ClaudeRecipe;