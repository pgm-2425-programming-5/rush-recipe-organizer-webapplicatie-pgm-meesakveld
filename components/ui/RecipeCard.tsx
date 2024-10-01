import Recipe from '@/types/Recipe.d';
import React from 'react';
import Button from '../common/button';


interface RecipeCardProps {
    recipe: Recipe
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="recipe-card bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
            <p className="text-gray-600">{recipe.category}</p>
        </div>
    );
};

export default RecipeCard;