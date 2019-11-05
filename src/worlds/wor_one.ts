import { control_paddle } from "../components/com_control_paddle.js";
import { draw_rect } from "../components/com_draw.js";
import { move } from "../components/com_move.js";
import { Game } from "../game.js";

export function world_one(game: Game) {
    game.World = [];

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [control_paddle(), draw_rect(100, 200, 'green'), move([0, 0])],
    });

    game.Add({
        Translation: [0, 0],
        Using: [control_paddle(), draw_rect(40, 20, 'blue'), move([0, 0])],
    });

}
