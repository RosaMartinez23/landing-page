const container = document.getElementById('imageContainer');
const card = document.getElementById('card');
const cardText = document.getElementById('card-text');

container.addEventListener('mousemove', function(event) {
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
            <li>Quema de biomasa: Libera metano a la atmósfera.</li>
            <li>Digestión en termitas: Las termitas producen metano durante la digestión de celulosa.</li>`;
    } else if (x >= width / 2 && y < height / 2) {
        card.style.top = '10%';
        card.style.left = '87%';
        cardText.innerHTML = `
            <li>Combustibles fósiles: La extracción y quema libera metano.</li>
            <li>Vertederos: Los desechos se descomponen y emiten metano.</li>`;
    } else if (x < width / 2 && y >= height / 2) {
        card.style.top = '70%';
        card.style.left = '15%';
        cardText.innerHTML = `
            <li>Digestión en animales: Los rumiantes emiten metano durante la digestión.</li>
            <li>Hidratos y clatratos: El metano congelado en el fondo marino puede liberarse.</li>`;
    } else {
        card.style.top = '70%';
        card.style.left = '87%';
        cardText.innerHTML = `
            <li>Bacterias metanotróficas: Consumen metano y lo mitigan.</li>
            <li>Oxidación anaeróbica: Microbios reducen la liberación de metano.</li>`;
    }
});
