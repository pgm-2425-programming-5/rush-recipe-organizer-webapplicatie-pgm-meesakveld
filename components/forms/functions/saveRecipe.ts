'use server';
import fs from 'fs';
import path from 'path';
import Recipe from '@/types/Recipe.d';

export default async function saveRecipe(newRecipe: Recipe) {
    const filePath = path.join(process.cwd(), 'public/data/recipes.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const recipes: Recipe[] = JSON.parse(fileData);
    recipes.push(newRecipe);
    fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2));
}