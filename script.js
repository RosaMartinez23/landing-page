const container = document.getElementById('imageContainer');
const card = document.getElementById('card');
const cardText = document.getElementById('card-text');

container.addEventListener('mousemove', function (event) {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    // Dividir en 4 cuadrantes
    if (x < width / 2 && y < height / 2) {
        card.style.top = '10%';
        card.style.left = '15%';
        cardText.innerHTML = `
            <li>Biomass burning: Releases methane into the atmosphere.</li>
            <li>Termite digestion: Termites produce methane during cellulose digestion.</li>`;
    } else if (x >= width / 2 && y < height / 2) {
        card.style.top = '10%';
        card.style.left = '87%';
        cardText.innerHTML = `
            <li>Fossil fuels: Extraction and burning release methane.</li>
            <li>Landfills: Waste decomposes and emits methane.</li>`;
    } else if (x < width / 2 && y >= height / 2) {
        card.style.top = '70%';
        card.style.left = '15%';
        cardText.innerHTML = `
            <li>Animal digestion: Ruminants emit methane during digestion.</li>
            <li>Hydrates and clathrates: Frozen methane in the seabed can be released.</li>`;
    } else {
        card.style.top = '70%';
        card.style.left = '87%';
        cardText.innerHTML = `
            <li>Methanotrophic bacteria: They consume methane and mitigate it.</li>
            <li>Anaerobic oxidation: Microbes reduce methane release.</li>`;
    }
});
