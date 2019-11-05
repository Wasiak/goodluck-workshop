import { Get, Has } from "../components/com_index.js";
import { Entity, Game } from "../game.js";
import { Vec2 } from "../math/index.js";
import { normalize } from "../math/vec2.js";

const QUERY = Has.Transform2D | Has.ControlBall;

export function sys_control_ball(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let direction = <Vec2>[2, 1];
    // normalize change to normal vector NOT SPEED
    normalize(direction, direction);
    let speed = 100;

    let transform = game[Get.Transform2D][entity];
    transform.Translation[0] += direction[0] * speed * delta;
    transform.Translation[1] += direction[1] * speed * delta;
    transform.Dirty = true;
}
