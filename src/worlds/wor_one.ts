import { collide } from "../components/com_collide.js";
import { control_ball } from "../components/com_control_ball.js";
import { control_paddle } from "../components/com_control_paddle.js";
import { draw_rect } from "../components/com_draw.js";
import { move } from "../components/com_move.js";
import { Game } from "../game.js";

export function world_one(game: Game) {
    game.World = [];

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [control_paddle(), draw_rect(30, 200, 'green'), move([0, 0], 100)],
    });

    for (let i = 0; i < 10; i++) {
        game.Add({
            Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
            Using: [
                control_ball(Math.PI + Math.random() * Math.PI),
                draw_rect(20, 20, 'red'),
                move([0, 0], 300),
                collide([20, 20])
            ],
        });
    }
}
