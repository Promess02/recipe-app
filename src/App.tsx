import React, { useState, useEffect } from 'react';

interface Recipe {
    recipe_id: number;
    recipe_name: string;
    ingredients: string;
    instructions: string;
    prepare_time: number;
    dish_category_id: number;
    diet_category_id: number;
    calories: number;
    image_path: string;
    num_of_portions: number;
    update_date: string;
    author_id: number;
}

const Recipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost:4000/recipes');
                const data = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
            {recipes.map((recipe) => (
                    <li key={recipe.recipe_id}>
                        <h2>{recipe.recipe_name}</h2>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.instructions}</p>
                        <p>Preparation Time: {recipe.prepare_time} minutes</p>
                        <p>Calories: {recipe.calories}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipes;