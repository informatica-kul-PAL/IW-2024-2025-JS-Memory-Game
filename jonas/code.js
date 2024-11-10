const PREMADE_LEVELS = {
    'Level 1':
        [['A', 'B', 'C'],
         ['B', 'C', 'A']],
    'Level 2':
        [['A', 'B', 'C', 'C'],
         ['B', 'D', 'A', 'E'],
         ['E', 'F', 'F', 'D']],
    'Level 3':
        [['A', 'B', 'C', 'C', 'G'],
         ['B', 'D', 'A', 'E', 'H'],
         ['E', 'F', 'F', 'D', 'H'],
         ['I', 'J', 'G', 'I', 'J']],
};

const GameStates = Object.freeze({
    SELECTING_FIRST: Symbol("first"),
    SELECTING_SECOND:  Symbol("second"),
    CONTINUE: Symbol("continue"),
    FINISHED: Symbol("finished")
});

const Players = Object.freeze({
    PLAYER_A: Symbol("A"),
    PLAYER_B: Symbol("B"),
})

let game

class MemoryGame {
    field;
    game_state = GameStates.SELECTING_FIRST;
    current_player = Math.random() < 0.5 ? Players.PLAYER_A : Players.PLAYER_B;
    score_player_A = 0;
    score_player_B = 0;
    selected_1 = [-1, -1];
    selected_2 = [-1, -1];

    constructor(field) {
        this.field = field;
        document.getElementById('gameboard').innerHTML = this.board_html;
        this.update_stats();
    }

    get height() {
        return this.field.length;
    }

    get width() {
        return this.field[0].length;
    }

    get board_html() {
        return [...Array(this.height).keys()].map(row => {
            return `
            <tr>
                ${
                    [...Array(this.width).keys()].map(col => {
                        return `
                        <td class="${this.field[row][col]}" onclick="game.handle_click(this)">
                            <div class="cardBack">${this.field[row][col]}</div>
                            <div class="cardFront"></div>
                        </td>`;
                    }).join('\n')
                }
            </tr>`;
        }).join('');
    }

    update_stats() {
        document.getElementById('points_A').innerHTML = `${this.score_player_A}`;
        document.getElementById('points_B').innerHTML = `${this.score_player_B}`;
        document.getElementById('status_indicator').innerHTML = this.status_description;
    }

    get status_description() {
        switch (this.game_state) {
            case GameStates.SELECTING_FIRST:
                return `Player ${this.current_player.description} should select their first card`;
            case GameStates.SELECTING_SECOND:
                return `Player ${this.current_player.description} should select their second card`;
            case GameStates.CONTINUE:
                return `Incorrect match, click either of the 2 cards to continue`
            case GameStates.FINISHED:
                if (this.score_player_A === this.score_player_B)
                    return `It's a draw, both players got ${this.score_player_A} pairs!`
                else if (this.score_player_A > this.score_player_B)
                    return `Player A wins with ${this.score_player_A} pairs, player B loses with ${this.score_player_B} pairs!`
                else
                    return `Player B wins with ${this.score_player_B} pairs, player A loses with ${this.score_player_A} pairs!`
        }

        return "Unknown state...";
    }

    handle_click(cell) {
        switch (this.game_state) {
            case GameStates.SELECTING_FIRST:
                this.select_first(cell);
                break;
            case GameStates.SELECTING_SECOND:
                this.select_second(cell);
                break;
            case GameStates.CONTINUE:
                this.continue(cell);
        }

        this.update_stats();
    }

    select_first(cell) {
        if (cell.classList.contains('flipped')) return;

        const row = cell.parentNode.rowIndex;
        const col = cell.cellIndex;

        cell.classList.add('flipped');
        this.selected_1 = [row, col];
        this.game_state = GameStates.SELECTING_SECOND;
    }

    select_second(cell) {
        if (cell.classList.contains('flipped')) return;

        const row = cell.parentNode.rowIndex;
        const col = cell.cellIndex;

        cell.classList.add('flipped');
        this.selected_2 = [row, col];

        if (this.field[row][col] === this.field[this.selected_1[0]][this.selected_1[1]]) {
            this.add_point();
            const [cell_1, cell_2] = this.selected_cells;
            cell_1.classList.add(`player_${this.current_player.description}`);
            cell_2.classList.add(`player_${this.current_player.description}`);
            if (this.finished)
                this.game_state = GameStates.FINISHED;
            else
                this.game_state = GameStates.SELECTING_FIRST;
        } else {
            this.game_state = GameStates.CONTINUE;
        }
    }

    continue(cell) {
        const [cell_1, cell_2] = this.selected_cells;
        if (cell === cell_1 || cell === cell_2) {
            cell_1.classList.remove('flipped');
            cell_2.classList.remove('flipped');
            this.swap_player();
            this.game_state = GameStates.SELECTING_FIRST;
        }
    }

    swap_player() {
        if (this.current_player === Players.PLAYER_A)
            this.current_player = Players.PLAYER_B;
        else
            this.current_player = Players.PLAYER_A;
    }

    add_point() {
        if (this.current_player === Players.PLAYER_A)
            this.score_player_A++;
        else
            this.score_player_B++;
    }

    get finished() {
        return (this.score_player_A + this.score_player_B) * 2 >= this.width * this.height;
    }

    get selected_cells() {
        const board = document.getElementById('gameboard');
        const cell_1 = board.rows[this.selected_1[0]].cells[this.selected_1[1]];
        const cell_2 = board.rows[this.selected_2[0]].cells[this.selected_2[1]];
        return [cell_1, cell_2];
    }
}

function generate_random_game(width, height) {
    if (width * height % 2 !== 0) {
        alert("These dimensions don't allow for an even amount of cards...");
        return game;
    }

    let count = width * height / 2;

    if (count > 26) {
        alert("The field is too big, there can be a maximum of 52 cards...");
        return game;
    }

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .substring(0, count)
        .repeat(2)
        .split('')
        .sort(() => 0.5 - Math.random());

    let field = Array(height)
        .fill([])
        .map(() =>
            Array(width)
                .fill('')
                .map(() => chars.pop())
        );

    return new MemoryGame(field);
}

window.onload = (_event) => {
    game = new MemoryGame(PREMADE_LEVELS['Level 1']);
};