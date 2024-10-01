import fs from 'fs/promises';
import path from 'path';
import Recipe from '@/types/Recipe.d';  // Import the Recipe type
import Button from '../common/button';

export default async function RecipeContainer({ id }: { id: number }) {
    const data = await fs.readFile(path.join(process.cwd(), 'public/data/recipes.json'), 'utf-8');
    const recipes: Recipe[] = JSON.parse(data);
    const recipe = recipes.find((recipe) => recipe.id === id);

    return (
        <div className="p-6 mt-8 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
            {recipe ? (
                <div className='flex flex-col gap-8'>
                    <h2 className="text-2xl font-bold">{recipe.name}</h2>
                    <p className="text-gray-500">Category: {recipe.category}</p>
                    <div>
                        <h3 className="text-xl font-semibold">Ingredients</h3>
                        <ul className="list-disc list-inside">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Instructions</h3>
                        <ol className="list-decimal list-inside">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>

                    <Button as="link" href="/recipes">
                        Back to recipes
                    </Button>
                </div>
            ) : (
                <p className="text-red-500">Recipe not found</p>
            )}
        </div>
    )
}
