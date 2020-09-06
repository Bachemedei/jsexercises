const base = require("./base");
Object.getOwnPropertyNames(base).map((p) => (global[p] = base[p]));

// Constants
const NORTH = { x: 0, y: -1 };
const SOUTH = { x: 0, y: 1 };
const EAST  = { x: 1, y: 0 };
const WEST  = { x: 1, y: 0 };

// Point operations
const pointEq = p1 => p2 => p1.x == p2.x && p1.y == p2.y

// Booleans
const willEat = state => pointEq(nextHead(state))(state.apple)
const willCrash = state => state.snake.find(pointEq(nextHead(state)))
const validMove = move => state =>
    state.moves[0].x + move.x != 0 || state.moves[0].y + move.y != 0