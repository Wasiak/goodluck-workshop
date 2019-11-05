import { Get, Has } from "../components/com_index";
import { Entity, Game } from "../game";
import { normalize } from "../math/vec2.js";

const QUERY = Has.Transform2D | Has.Move;

export function sys_move(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let direction = game[Get.Move][entity].Direction;
    // normalize change to normal vector NOT SPEED
    normalize(direction, direction);
    let speed = game[Get.Move][entity].Speed;

    let transform = game[Get.Transform2D][entity];
    transform.Translation[0] += direction[0] * speed * delta;
    transform.Translation[1] += direction[1] * speed * delta;
    transform.Dirty = true;

}