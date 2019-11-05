import { Game } from "./game.js";
import { world_two } from './worlds/wor_two.js';

let game = new Game();
world_two(game);
game.Start();

// @ts-ignore
window.game = game;
