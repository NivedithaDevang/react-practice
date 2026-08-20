import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Niveditha");

  return (
    <UserContext.Provider value={user}>
        <h1>USECONTEXT</h1>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2><br></br>
    </>
  );
}



const UserContext1 = createContext();

function Context() {
  const [name, setName] = useState("Niveditha");
  const [age, setAge] = useState(21);
  const [message, setMessage] = useState("");

  const sayHello = () => {
    setMessage("Hello");
  };

  const logout = () => {
    setMessage("Logged out");
  };

  return (
    <UserContext1.Provider
      value={{ name, age, message, setName, setAge, sayHello, logout }}
    >
      <Profile />
    </UserContext1.Provider>
  );
}

function Profile() {
  const { name, age, message, setName, setAge, sayHello, logout } =
    useContext(UserContext1);

  return (
    <div>
        <h1>Another example of useContext</h1>

      <h1>{name}</h1>
      <p>{age}</p>
      <p>{message}</p>

      <button onClick={() => setName("Nivi")}>
        Change Name
      </button>

      <button onClick={() => setAge(age + 10)}>
        Increase Age
      </button>

      <button onClick={sayHello}>
        Say Hello
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}


export { Component1, Component2, Component3, Profile, Context };