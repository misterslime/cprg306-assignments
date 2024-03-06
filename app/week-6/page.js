"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from './items.json';
import Link from "next/link";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState();

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <body>
            <main className>
                <div>
                    <ItemList items={items} />
                </div>
                <div>
                    <NewItem onAddItem={handleAddItem} />
                </div>
            </main>
        </body>
    );
}