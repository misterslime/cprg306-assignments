import Item from "./item";
import items from './item.json' assert { type: 'json' };
import { useState } from "react";

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");

  // sort items by sortBy
  items.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });

  //function to decide how to format the list of items by sortBy
  function listItems() {
    return items.map((item) => (
      <li key={item.id}>
        <Item {...item} />
      </li>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-3xl m-1">Shopping List</h1>
      <div className="flex">
        <button onClick={() => setSortBy("name")}>Sort by Name</button>
        <button onClick={() => setSortBy("category")}>Sort by Category</button>
      </div>
      <div className="flex flex-wrap justify-center ">
        <ul>{listItems()}</ul>
      </div>
    </div>
  );
}