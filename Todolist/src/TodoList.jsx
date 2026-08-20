import { useState } from "react";

import './index.css';
function TodoList() {
    const [items, setItems] = useState([
        { id: 1, text: "Learn react", done: false },
        { id: 2, text: "Build an app", done: false }
    ]);


    const addItem = () => {
        const newItem = {
            id: Date.now(),
            text: "Deploy",
            done: false,
        };
        setItems([...items, newItem]);
    };

    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const toggleDone = (id) => {
        setItems((prevItems) => prevItems.map((item) => {
            if (item.id === id) {
                return { ...item, done: !item.done };
            }
            return item;
        })
        );
    };

    return (
        <div className= "todo">
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                            {item.text}
                        </span>
                        <button className= "done" onClick={() => toggleDone(item.id)}>
                            {item.done ? "Undo" : "Done"}
                        </button>
                        <button className= "remove" onClick={() => removeItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button className= "add" onClick={addItem}>Add Item</button>
        </div>
    );
}

export default TodoList;