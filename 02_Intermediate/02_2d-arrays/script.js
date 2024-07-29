document.addEventListener("DOMContentLoaded", () => {
    const matrix = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    document.querySelectorAll(".cell").forEach(cell => {
        cell.addEventListener("click", () => {
            const row = cell.getAttribute("data-row");
            const col = cell.getAttribute("data-col");

            if (!matrix[row][col]) {
                matrix[row][col] = 'X';
                cell.textContent = 'X';
            }
        });
    });
});
