import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export const MetricCard = ({ title, data }) => {
  return (
    <article className="metric-card">
      <div className="grid">
        <div>
            <FontAwesomeIcon icon={faChartLine} size='2xl'/>
        </div>
        <div>
          <h5>{title}</h5>
          <h5>{data}</h5>
        </div>
      </div>
    </article>
  );
};
