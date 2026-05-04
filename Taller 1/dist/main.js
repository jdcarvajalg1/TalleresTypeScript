import { series } from "./data.js";
const seriesBody = document.getElementById("series-body");
const averageSeasons = document.getElementById("average-seasons");
function mostrarSeries(listaSeries) {
    let sumaTemporadas = 0;
    listaSeries.forEach((serie) => {
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
    const promedioTemporadas = sumaTemporadas / listaSeries.length;
    averageSeasons.innerHTML = `Seasons average: ${promedioTemporadas.toFixed(0)}`;
}
mostrarSeries(series);
