export const IncomesOutcomesItem = ({item}) => {
  return (
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td>{item.type}</td>
      <td><button>Accion</button></td>
    </tr>
  );
};
