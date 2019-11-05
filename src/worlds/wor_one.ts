import { collide } from "../components/com_collide.js";
import { control_ball } from "../components/com_control_ball.js";
import { control_brick } from '../components/com_control_brick.js';
import { control_paddle } from "../components/com_control_paddle.js";
import { draw_rect } from "../components/com_draw.js";
import { move } from "../components/com_move.js";
import { Game } from "../game.js";

export function world_one(game: Game) {
    game.World = [];

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - 45],
        Using: [
            control_paddle(),
            draw_rect(30, 200, 'green'),
            move([0, 0], 400),
            collide([200, 30])
        ],
    });

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [
            control_ball(Math.PI + Math.random() * Math.PI),
            draw_rect(20, 20, 'red'),
            move([0, 0], 500),
            collide([20, 20])
        ],
    });

    let leftOffset = (game.ViewportWidth / 2) - 5 * 60;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5; j++) {
            game.Add({
                Translation: [leftOffset + i * 60, 40 + j * 30],
                Using: [
                    draw_rect(20, 50, 'blue'),
                    collide([50, 20]),
                    control_brick()
                ],
            });
        }
    }
}
