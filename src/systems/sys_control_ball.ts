import { Get, Has } from "../components/com_index.js";
import { Entity, Game } from "../game.js";
import { Vec2 } from "../math/index.js";

const QUERY = Has.Transform2D | Has.ControlBall | Has.Move;

export function sys_control_ball(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let direction = <Vec2>[2, 1];
    let move = game[Get.Move][entity];
    move.Direction = direction;
}
