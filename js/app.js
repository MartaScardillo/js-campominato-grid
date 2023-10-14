const gridElement = document.querySelector('.grid');
console.log(gridElement);

const playBtnElement = document.getElementById('play-btn');
console.log(playBtnElement);

playBtnElement.addEventListener('click', function() {
    gridElement.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const n = i + 1;
        console.log(n);

        const htmlCell = '<div class="cell">' + n + '</div>'
        console.log(htmlCell);

        gridElement.innerHTML += htmlCell
    }

    const cellDOMElements = document. querySelectorAll('.cell')
    console.log(cellDOMElements);

    for (let i = 0; i < cellDOMElements.length; i++) {
        const currentCellElement = cellDOMElements[i]
        
        currentCellElement.addEventListener('click', function() {
            console.log('Casella toccata: ' + currentCellElement.innerHTML );
            currentCellElement.classList.add('bg-blue')
        })
    }
});

const cellDOMElement = document.querySelector('.cell')
console.log(cellDOMElement);