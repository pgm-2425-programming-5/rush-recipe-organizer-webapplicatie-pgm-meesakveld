'use client';
import React, { useState } from 'react';
import Recipe from '@/types/Recipe.d';
import saveRecipe from '@/components/forms/functions/saveRecipe';

const AddRecipeContainer: React.FC = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState<string[]>(['']);
    const [instructions, setInstructions] = useState<string[]>(['']);
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleAddRecipe = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !category || ingredients.some(ing => !ing) || instructions.some(ins => !ins)) {
            setError('All fields are required.');
            return;
        }

        const newRecipe: Recipe = {
            id: Date.now(),
            name,
            ingredients,
            instructions,
            category,
        };

        try {
            // Save the recipe
            saveRecipe(newRecipe);
            setError('');
            // Reset form
            setName('');
            setIngredients(['']);
            setInstructions(['']);
            setCategory('');
            // Redirect to the created recipe
            window.location.href = `/recipes/${newRecipe.id}`;
        } catch (err) {
            setError('Failed to save the recipe.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleAddRecipe}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Ingredients</label>
                    {ingredients.map((ingredient, index) => (
                        <input
                            key={index}
                            type="text"
                            value={ingredient}
                            onChange={(e) => {
                                const newIngredients = [...ingredients];
                                newIngredients[index] = e.target.value;
                                setIngredients(newIngredients);
                            }}
                            className="w-full px-3 py-2 border rounded mb-2"
                        />
                    ))}
                    <button
                        type="button"
                        onClick={() => setIngredients([...ingredients, ''])}
                        className="text-blue-500"
                    >
                        Add Ingredient
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Instructions</label>
                    {instructions.map((instruction, index) => (
                        <input
                            key={index}
                            type="text"
                            value={instruction}
                            onChange={(e) => {
                                const newInstructions = [...instructions];
                                newInstructions[index] = e.target.value;
                                setInstructions(newInstructions);
                            }}
                            className="w-full px-3 py-2 border rounded mb-2"
                        />
                    ))}
                    <button
                        type="button"
                        onClick={() => setInstructions([...instructions, ''])}
                        className="text-blue-500"
                    >
                        Add Instruction
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeContainer;


