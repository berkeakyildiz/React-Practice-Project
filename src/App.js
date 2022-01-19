import React, { useState } from "react";
import UserInput from "./Components/Users/UserInput";
import UserList from "./Components/Users/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUsername, newAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: newUsername, age: newAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <UserInput onAddUser={addUserHandler} />
      <UserList items={users} />
    </React.Fragment>
  );
}
