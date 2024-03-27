"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getItems, addItem } from "_services/shopping-list-service";

async function loadItems() {
    return getItems(user.uid);
}

export default function Page() {

    const [items, setItems] = useState();
    const [selectedItemName, setSelectedItemName ] = useState();

    useEffect(() => {
        setItems(loadItems());
    }, []); 

    const handleItemSelect = (id) => {
        let name = itemList.find((item) => item.id === id).name;
        let cleanedName = name.split(",")[0];
        cleanedName = cleanedName.replace(/[^a-z0-9\s,]/gi, "").trim();
        console.log(cleanedName);
        setSelectedItemName(cleanedName);
    };

    const handleAddItem = (item) => {
        let itemId = addItem(user.uid, item);
        item.id = itemId;
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