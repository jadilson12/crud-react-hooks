import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Apelido</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Editar
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                excluir
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Nenhum usuário</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
