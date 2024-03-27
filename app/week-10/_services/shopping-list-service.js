import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

async function getItems(userId) {
    let items = [];

    let query = doc(
        collection(db, "users", "userId", "items"),
        where("quantity", ">", 1)
    );

    let querySnapshot = await getDocs(query);
    querySnapshot.forEach((doc) => {
        items.push({id: doc.id, data: doc.data});
    });

    return items;
}

function addItem(userId, item) {
    let docRef = addDoc(collection(db, "users", "userId", "items"), item);
    return docRef.id;
}