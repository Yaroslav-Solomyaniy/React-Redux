import React from 'react';
import UserList from "./Components/userList";
import TodoList from "./Components/todoList";

function App() {
  return (
    <div>
     <UserList/>
        <hr/>
        <TodoList/>
    </div>
  );
}

export default App;
