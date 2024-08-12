document.getElementById('shuffleBtn').addEventListener('click', function() {
    const cardList = document.getElementById('cardList');
    const cards = Array.from(cardList.children).map(li => li.textContent);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }

    const shuffledCards = shuffleArray(cards);

    cardList.innerHTML = '';
    shuffledCards.forEach(card => {
        const li = document.createElement('li');
        li.textContent = card;
        cardList.appendChild(li);
    });
});
