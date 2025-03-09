import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

import "../styles/indicators.css";
import { indicatorsData } from "../server/indicatorsData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Indicators = () => {
    const data = {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
            {
                label: "Artigos Completos em Evento",
                data: indicatorsData(),
                backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
            {
                label: "Resumo em Evento",
                data: indicatorsData(),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
            {
                label: "Artigo em Periodico",
                data: indicatorsData(),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
            {
                label: "Livros",
                data: indicatorsData(),
                backgroundColor: "rgba(110, 10, 112, 0.6)",
            },
        ],
    };

    return (
        <div className="indicators-container">
            <div className="chart-content">
                <Bar data={data} options={{ plugins: { title: { display: true, text: "Quantidade x Anos" } } }} />
            </div>

            <div className="chart-content">
                <Bar data={data} options={{ plugins: { title: { display: true, text: "Média por docente x Anos" } } }} />
            </div>

            <div className="chart-content">
                <Bar data={data} options={{ plugins: { title: { display: true, text: "Quantidade de Docentes x Anos" } } }} />
            </div>

            <div className="chart-content">
                <Bar data={data} options={{ plugins: { title: { display: true, text: "Percentual de Docentes x Anos" } } }} />
            </div>

            <div className="chart-content">
                <Bar data={data} options={{ plugins: { title: { display: true, text: "Quantidade x Anos" } } }} />
            </div>

            <div className="chart-content">
                <Bar data={data} options={{ plugins: { title: { display: true, text: "Média por professor x Anos" } } }} />
            </div>
        </div>
    );
};
