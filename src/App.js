import React, { useState } from "react";

import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

import "./App.css";

function App() {
  // dados
  const usersData = [
    { id: 1, name: "Ana", username: "12skda" },
    { id: 2, name: "Jonh", username: "kfdse11" },
    { id: 3, name: "David", username: "maket34" }
  ];

  const [users, setUsers] = useState(usersData);

  // adicionar user
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // excluir user
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  // carregar user para editar
  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  // Atuaizar user
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };
  return (
    <div className="container">
      <h1>CRUD com Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Editar usuario</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Adicionar Usuário</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Listar Usuários</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
