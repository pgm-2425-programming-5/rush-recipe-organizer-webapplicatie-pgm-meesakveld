import RecipeContainer from "@/components/containers/recipeContainer";

export default async function RecipeItem({ params } : { params: { id: string } }) {
    const id = params.id;
    
    return (
        <div>
            <RecipeContainer id={parseInt(id)} />
        </div>
    );
}