document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addItem(itemInput.value);
        itemInput.value = '';
    });

    function addItem(...items) {
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            itemList.appendChild(li);
        });
    }
});
