import { draw_rect } from "../components/com_draw.js";
import { draw_fade } from "../components/com_fade.js";
import { Get, Has } from "../components/com_index.js";
import { Entity, Game } from "../game.js";
import { Vec2 } from '../math/index';

const QUERY = Has.Transform2D | Has.ControlBall | Has.Move;

export function sys_control_ball(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let control = game[Get.ControlBall][entity]
    let move = game[Get.Move][entity];
    let transform = game[Get.Transform2D][entity];
    let collider = game[Get.Collide][entity];
    if (collider.Collisions.length) {
        let collision = collider.Collisions[0];
        if (collision.Hit[0] !== 0) {
            control.Direction[0] *= -1;
            transform.Translation[0] += collision.Hit[0];
        } else {
            control.Direction[1] *= -1;
            transform.Translation[1] += collision.Hit[1];
        }
    }

    if (transform.Translation[0] <= 0) {
        control.Direction[0] *= -1;
        transform.Translation[0] = 0;
    }
    if (transform.Translation[0] >= game.ViewportWidth) {
        control.Direction[0] *= -1;
        transform.Translation[0] = game.ViewportWidth;
    }
    if (transform.Translation[1] <= 0) {
        control.Direction[1] *= -1;
        transform.Translation[1] = 0;
    }
    if (transform.Translation[1] >= game.ViewportHeight) {
        control.Direction[1] *= -1;
        transform.Translation[1] = game.ViewportHeight;
    }

    move.Direction[0] = control.Direction[0];
    move.Direction[1] = control.Direction[1];

    game.Add({
        Translation: [...transform.Translation] as Vec2,
        Using: [
            draw_rect(20, 20, 'red'),
            draw_fade(0.05)
        ]
    })
}
