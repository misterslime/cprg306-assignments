"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from './items.json';
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState();
    const [selectedItemName, setSelectedItemName ] = useState();

    const handleItemSelect = (id) => {
        let name = itemList.find((item) => item.id === id).name;
        let cleanedName = name.split(",")[0];
        cleanedName = cleanedName.replace(/[^a-z0-9\s,]/gi, "").trim();
        console.log(cleanedName);
        setSelectedItemName(cleanedName);
    };

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <body>
            <main className>
                <div>
                    <ItemList items={items} onSelect={handleItemSelect} />
                </div>
                <div>
                    <NewItem onAddItem={handleAddItem} />
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </main>
        </body>
    );
}