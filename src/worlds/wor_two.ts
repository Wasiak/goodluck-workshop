import { control_ball } from "../components/com_control_ball.js";
import { draw_rect } from "../components/com_draw.js";
import { move } from "../components/com_move.js";
import { Game } from "../game.js";

export function world_two(game: Game) {
    game.World = [];

    // game.Add({
    //     Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
    //     Using: [control_paddle(), draw_rect(100, 200, 'green')],
    // });

    game.Add({
        Translation: [0, 0],
        Using: [control_ball(), draw_rect(40, 20, 'blue'), move([1, 0])],
    });

}
