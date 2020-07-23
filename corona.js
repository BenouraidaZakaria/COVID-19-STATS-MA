const casesUI = document.querySelector('.totalcases');
const recoveredUI = document.querySelector('.recovered');
const deathsUI = document.querySelector('.deaths');
const timeUI = document.querySelector('.time');
class Corona {
    constructor() {
        this.url = 'https://covid19.mathdro.id/api/countries/MA';
    }
    async getData() {
        const response = await fetch(this.url);
        const data = await response.json()
        return data;
    }
}
const stats = new Corona();

stats.getData()
    .then(data => console.log(data))
    .catch(err => console.log(err));

const updateUI = (data) => {
    const { confirmed, recovered, deaths, lastUpdate } = data;

    const newD = new Date(`${lastUpdate}`);
    const timeOfUpdate = newD.toLocaleString('fr');

    casesUI.innerHTML = confirmed.value;
    recoveredUI.innerHTML = recovered.value;
    deathsUI.innerHTML = deaths.value;
    timeUI.innerHTML += `le ${timeOfUpdate} heure locale.`;
    document.title = `Cas : ${confirmed.value}`;

}
stats.getData()
    .then(data => updateUI(data))
    .catch(err => console.log(err));

