import { IncomesOutcomesList } from "./components/IncomesOutcomesList";
import { MetricCard } from "./components/MetricCard";
import { NavBar } from "./components/NavBar";

const incomesOutcomesData = [
  {
    id: 1,
    description: "Detalle del ingreso",
    category: "categoria1",
    type: "income",
    date: new Date().getTime(),
  },
  {
    id: 2,
    description: "Detalle del egreso",
    category: "categoria2",
    type: "outcome",
    date: new Date().getTime() + 1,
  },
  {
    id: 3,
    description: "Detalle del ingreso",
    category: "categoria3",
    type: "income",
    date: new Date().getTime() + 2,
  },
  {
    id: 4,
    description: "Detalle del egreso",
    category: "categoria4",
    type: "outcome",
    date: new Date().getTime() + 3,
  },
  {
    id: 5,
    description: "Detalle del ingreso",
    category: "categoria5",
    type: "income",
    date: new Date().getTime() + 4,
  },
];

export const App = () => {
  return (
    <main className="container">
      <NavBar />
      <article>
        <header>
          <div className="grid">
            <MetricCard title={"Ingresos"} data={10} />
            <MetricCard title={"Egresos"} data={15} />
          </div>
        </header>
        <IncomesOutcomesList incomesOutcomesData={incomesOutcomesData} />
        <footer>Footer</footer>
      </article>
    </main>
  );
};
