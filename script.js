let fields = [
    null,
    'circle',
    'circle',
    null,
    null,
    'cross',
    'cross',
    null,
    null,
];

function init() {
    // Rufe die render-Funktion auf, um das Spiel zu starten
render();
}

function render() {
    const container = document.getElementById('content');
    container.innerHTML = '';

    const table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            const cell = document.createElement('td');

            // Füge den aktuellen Zustand des Felds in die Zelle ein
            if (fields[index] === 'circle') {
                cell.innerHTML = 'O';
                cell.classList.add('circle');
            } else if (fields[index] === 'cross') {
                cell.innerHTML = 'X';
                cell.classList.add('cross');
            }

            // Füge einen Event Listener für den Klick hinzu
            cell.addEventListener('click', () => handleClick(index));

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.appendChild(table);
}

function handleClick(index) {
    // Hier kannst du die Logik für den Klick implementieren
    console.log(`Klick auf Zelle ${index}`);
}