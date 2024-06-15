let currentPlayer = "X";
let cells = document.querySelectorAll('.cell');

function playMove(cellIndex) {
    if (cells[cellIndex].textContent === "") {
        cells[cellIndex].textContent = currentPlayer;
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
            return;
        }
        if (isBoardFull()) {
            alert("It's a tie!");
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return cells[combo[0]].textContent !== "" &&
               cells[combo[0]].textContent === cells[combo[1]].textContent &&
               cells[combo[1]].textContent === cells[combo[2]].textContent;
    });
}

function isBoardFull() {
    return [...cells].every(cell => cell.textContent !== "");
}

function resetGame() {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
}