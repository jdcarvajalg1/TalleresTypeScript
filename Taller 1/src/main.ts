import { series } from "./data.js";
import { Serie } from "./Serie.js";

const seriesBody: HTMLElement = document.getElementById("series-body")!;
const averageSeasons: HTMLElement = document.getElementById("average-seasons")!;

function mostrarSeries(listaSeries: Serie[]): void {
    let sumaTemporadas: number = 0;

    listaSeries.forEach((serie: Serie) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td><strong>${serie.id}</strong></td>
            <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;

        seriesBody.appendChild(fila);
        sumaTemporadas += serie.seasons;
    });

    const promedioTemporadas: number = sumaTemporadas / listaSeries.length;
    averageSeasons.innerHTML = `Seasons average: ${promedioTemporadas.toFixed(0)}`;
}

mostrarSeries(series);