import { series } from "./data.js";
const seriesTable = document.getElementById("series-body");
const averageSeasons = document.getElementById("average-seasons");
const serieDetail = document.getElementById("serie-detail");
function showDetail(serie) {
    serieDetail.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title"><strong>${serie.name}</strong></h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" target="_blank">${serie.link}</a>
            </div>
        </div>
    `;
}
function renderSeries(seriesList) {
    let totalSeasons = 0;
    seriesList.forEach((serie) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td><strong>${serie.id}</strong></td>
            <td>
                <a href="#" id="serie-${serie.id}">
                    ${serie.name}
                </a>
            </td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTable.appendChild(trElement);
        const serieLink = document.getElementById(`serie-${serie.id}`);
        serieLink.onclick = (event) => {
            event.preventDefault();
            showDetail(serie);
        };
        totalSeasons += serie.seasons;
    });
    const average = totalSeasons / seriesList.length;
    averageSeasons.innerHTML = `Seasons average: ${average.toFixed(0)}`;
}
renderSeries(series);
