document.addEventListener("DOMContentLoaded", () => {
    // Card options
    const cardArray = [
        {
            name: 'orden',
            img: 'images-memoria/orden_texto.png'
        },
        {
            name: 'orden',
            img: 'images-memoria/orden.png'
        },
        {
            name: 'limpieza',
            img: 'images-memoria/limpieza_texto.png'
        },
        {
            name: 'limpieza',
            img: 'images-memoria/limpieza.png'
        },
        {
            name: 'puntualidad',
            img: 'images-memoria/puntualidad_texto.png'
        },
        {
            name: 'puntualidad',
            img: 'images-memoria/puntualidad.png'
        },
        {
            name: 'ley',
            img: 'images-memoria/ley_texto.png'
        },
        {
            name: 'ley',
            img: 'images-memoria/ley.png'
        },
        {
            name: 'trabajo',
            img: 'images-memoria/trabajo_texto.png'
        },
        {
            name: 'trabajo',
            img: 'images-memoria/trabajo.png'
        },
        {
            name: 'ahorrar',
            img: 'images-memoria/ahorrar_texto.png'
        },
        {
            name: 'ahorrar',
            img: 'images-memoria/ahorrar.png'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // Create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images-memoria/blank.png')
            card.style.border = "1px black solid";
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)  
            grid.appendChild(card)
        }
    }

    //Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('¡Encontraste una pareja!')
            cards[optionOneId].setAttribute('src', 'images-memoria/white.png')
            cards[optionTwoId].setAttribute('src', 'images-memoria/white.png')
            cardsWon.push(cardsChosen)            
        } else {
            cards[optionOneId].setAttribute('src', 'images-memoria/blank.png')
            cards[optionTwoId].setAttribute('src', 'images-memoria/blank.png')
            alert('¡Tarjetas incorrectas!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "¡Felicidades!"
        }
    }

    //Flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)            
        }
    }

    createBoard()
})