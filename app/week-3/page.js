import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
    return (
        <body>
            <main className="bg-slate-700">
                <ItemList />
            </main>
        </body>
    );
}