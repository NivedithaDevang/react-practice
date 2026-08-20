import { useState } from "react";
import './index.css';


function List(){
    const fruits = [
        {id: 1, name: "apple", calories: 82},
        {id: 2, name: "mango", calories: 100},
        {id: 3, name: "cherry", calories: 238},
        {id: 4, name: "banana", calories: 24},
        {id: 5, name: "kiwi", calories: 54},

    ];

    


    //fruits.sprt((a, b) => b.nme.localCompare(a.name));  reverse alphabetical
    //fruits.sort((a, b) => a.calories - b.calories);    numeric
        //fruits.sort((a, b) => b.calories - a.calories);    reverse numeric
    fruits.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = fruits.map(fruit => <li key={fruit.name}>
        {fruit.name}: &nbsp;
       <b>{fruit.calories}</b> </li>);
    return (<ul>{listItems}</ul>);
    }

    

    function Veg(){

        const veg = [
        {id: 6, name: "tomato", calories: 82},
        {id: 7, name: "onion", calories: 100},
        {id: 8, name: "cucumber", calories: 238},
        {id: 9, name: "radish", calories: 24},
        {id: 10, name: "beans", calories: 54},

    ];
       veg.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = veg.map(veggies => <li key={veggies.name}>
        {veggies.name}: &nbsp;
       <b>{veggies.calories}</b> </li>);
    return (<ul>{listItems}</ul>);

}

 const LoginCard = () => {
    const [isLoggedIn, setIsLogged] = useState(false);

    const handleLogin = () => {
        setIsLogged(!isLoggedIn);
    };

    return(
        <button className = "logout" onClick = {handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    );
}


export { List, Veg, LoginCard }