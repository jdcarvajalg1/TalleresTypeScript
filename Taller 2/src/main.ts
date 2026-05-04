import { series } from "./data.js";
import { Serie } from "./Serie.js";

const seriesTable: HTMLElement = document.getElementById("series-body")!;
const averageSeasons: HTMLElement = document.getElementById("average-seasons")!;
const serieDetail: HTMLElement = document.getElementById("serie-detail")!;

function showDetail(serie: Serie): void {
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

function renderSeries(seriesList: Serie[]): void {
    let totalSeasons: number = 0;

    seriesList.forEach((serie: Serie) => {
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

        const serieLink: HTMLElement = document.getElementById(`serie-${serie.id}`)!;

        serieLink.onclick = (event: MouseEvent): void => {
            event.preventDefault();
            showDetail(serie);
        };

        totalSeasons += serie.seasons;
    });

    const average: number = totalSeasons / seriesList.length;
    averageSeasons.innerHTML = `Seasons average: ${average.toFixed(0)}`;
}

renderSeries(series);