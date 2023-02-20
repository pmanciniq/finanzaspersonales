import { IncomesOutcomesItem } from "./IncomesOutcomesItem";

export const IncomesOutcomesList = ({incomesOutcomesData}) => {
  return (
    <figure>
      <h1 style={{ textAlign: "center" }}>Ingresos y Egresos</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Detalle</th>
            <th scope="col">Categoría</th>
            <th scope="col">Fecha</th>
            <th scope="col">Tipo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            incomesOutcomesData.map(IOitem => <IncomesOutcomesItem key={IOitem.id+Math.random()} incomeOutcomesItem={IOitem} />)
          }
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">#</th>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
          </tr>
        </tfoot>
      </table>
    </figure>
  );
};
