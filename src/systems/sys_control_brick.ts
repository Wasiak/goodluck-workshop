import { Get, Has } from "../components/com_index.js";
import { Entity, Game } from "../game.js";

const QUERY = Has.Transform2D | Has.ControlBrick;

export function sys_control_brick(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let collider = game[Get.Collide][entity];
    if (collider.Collisions.length) {
        console.log('collide')
        game.Destroy(entity);
    }
}
