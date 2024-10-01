import fs from 'fs/promises';
import path from 'path';
import RecipeCard from '../ui/RecipeCard';  // Import the RecipeCard component
import Recipe from '@/types/Recipe.d';  // Import the Recipe type
import Link from 'next/link';

export default async function RecipesContainer() {
    // Fetch and parse the recipes data from the JSON file
    const data = await fs.readFile(path.join(process.cwd(), 'public/data/recipes.json'), 'utf-8');
    const recipes: Recipe[] = JSON.parse(data);

    return (
        <section id="recipes" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Recipes</h2>
                <div className="flex flex-wrap justify-center">
                    {recipes.map((recipe, index) => (
                        <Link key={index} href={`/recipes/${recipe.id}`} className="w-full md:w-1/3 px-4 mb-8">
                            <RecipeCard recipe={recipe} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
