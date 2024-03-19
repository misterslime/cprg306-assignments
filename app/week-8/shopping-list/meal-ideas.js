"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json()
    return data.meals
}

export function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([])

    const loadMealIdeas = async () => { setMeals(await fetchMealIdeas(ingredient)); }

    useEffect(() => { loadMealIdeas() }, [ingredient])

    return (
        <div>
            <div>
                <h1>Meal Ideas</h1>
            </div>
            
            <ul>
                {checkForMeals()}
            </ul>
        </div>
    )
}
